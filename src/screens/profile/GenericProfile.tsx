import React, { FC, useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import {
  Text,
  Button,
  TopNavigation,
  TopNavigationAction,
  Avatar,
  Input,
  Layout,
} from "@ui-kitten/components";
import { useMutation, useQuery } from "@apollo/client";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Alert, Icons, Queries, noavatar, Mutations } from "@greeneggs/core";
import {
  FollowUser,
  profile,
  RecipeFilter,
  recipes,
  recipesVariables,
  recipes_recipes_data,
  Sort,
} from "@greeneggs/types/graphql";
import LoadingScreen from "../loading/LoadingScreen";
import RecipeCardSmall from "@greeneggs/core/recipe-card-small";
import { useNavigation } from "@react-navigation/core";
import { FlatList } from "react-native-gesture-handler";
import LazyList from "@greeneggs/core/lazy-list";

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  avatar: {
    margin: 8,
    width: 120,
    height: 120,
  },
  view: {
    height: "100%",
  },
  description: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  button: {},
  topButton: {
    width: 24,
    height: 24,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  profileContainer: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 16,
  },
  statBox: {
    flexDirection: "column",
    alignItems: "center",
  },
  search: {
    backgroundColor: "white",
    margin: 16,
  },
});

interface IProfileStat {
  label: string;
  value: string;
}

const ProfileStat = ({ label, value }: IProfileStat) => (
  <View style={styles.statBox}>
    <Text category="label">{value}</Text>
    <Text category="c1">{label}</Text>
  </View>
);

interface MyRecipesProps {
  query: string;
  userId: string;
}

const MyRecipes: FC<MyRecipesProps> = ({ query, userId }) => {
  const navigation = useNavigation();

  return (
    <LazyList<
      recipes,
      recipesVariables,
      recipes_recipes_data,
      Sort,
      RecipeFilter
    >
      query={Queries.GET_RECIPES}
      variables={{
        query: query,
        sort: Sort.NEW,
        filter: {
          user: userId,
        },
      }}
      dataKey="recipes"
      emptyMessage="You haven't uploaded any recipes! Once you've uploaded some recipes they'll be shown here."
      errorMessage="No recipes found!"
      renderItem={({ item: myRecipe }) => (
        <View style={{ marginBottom: 16, marginHorizontal: 16 }}>
          <RecipeCardSmall
            recipe={myRecipe}
            onPress={() =>
              navigation.navigate("Recipe", {
                recipeId: myRecipe.id,
              })
            }
          />
        </View>
      )}
    />
  );
};

interface GenericProfileProps {
  userId: string;
  isMe?: boolean;
}

const GenericProfile = ({ userId, isMe = false }: GenericProfileProps) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const profileResult = useQuery<profile>(Queries.GET_PROFILE, {
    variables: {
      userId,
    },
  });

  const [followUser] = useMutation<FollowUser>(Mutations.FOLLOW_USER, {
    variables: {
      userId,
    },
    refetchQueries: [Queries.GET_PROFILE, "profile"],
  });

  const [unfollowUser] = useMutation<FollowUser>(Mutations.UNFOLLOW_USER, {
    variables: {
      userId,
    },
    refetchQueries: [Queries.GET_PROFILE, "profile"],
  });

  const [myRecipeQuery, setMyRecipeQuery] = useState("");

  if (profileResult.loading) {
    return <LoadingScreen />;
  }

  if (profileResult.error) {
    return <Alert message="There was an error" type="danger" />;
  }

  const profile = profileResult.data?.profile.data;

  if (profile === undefined || profile === null) {
    return <Text>Error! User not found</Text>;
  }

  function optional(value: string | number | null | undefined) {
    return value?.toString() || "";
  }

  return (
    <Layout level="2" style={{ ...styles.view }}>
      <TopNavigation
        style={{ backgroundColor: "transparent", paddingTop: insets.top }}
        accessoryLeft={() => {
          return isMe ? (
            <TopNavigationAction
              icon={Icons.Settings}
              onPress={() => navigation.navigate("Settings")}
            />
          ) : (
            <TopNavigationAction
              icon={Icons.Back}
              onPress={() => navigation.goBack()}
            />
          );
        }}
      />
      <View style={styles.avatarContainer}>
        <Pressable onPress={() => navigation.navigate("EditProfilePicture")}>
          <Avatar
            style={styles.avatar}
            shape="round"
            size="giant"
            source={profile.avatarURI ? { uri: profile.avatarURI } : noavatar}
          />
        </Pressable>
      </View>
      <View style={styles.profileContainer}>
        <Text category="h5">{`${profile.firstName} ${profile.lastName}`}</Text>
        {isMe ? (
          <Button
            size="small"
            style={styles.button}
            accessoryLeft={Icons.Edit}
            onPress={() => navigation.navigate("EditProfile")}
          >
            EDIT
          </Button>
        ) : (
          <Button
            size="small"
            onPress={
              profile.isFollowing ? () => unfollowUser() : () => followUser()
            }
          >
            {profile.isFollowing ? "UNFOLLOW" : "FOLLOW"}
          </Button>
        )}
      </View>
      <Text style={styles.description} numberOfLines={2}>
        {optional(profile.bio)}
      </Text>
      <View style={styles.statContainer}>
        <ProfileStat
          label="Following"
          value={profile.followingCount.toString()}
        />
        <ProfileStat
          label="Followers"
          value={profile.followerCount.toString()}
        />
        <ProfileStat label="Recipes" value={profile.recipeCount.toString()} />
        <ProfileStat label="Likes" value={profile.likeCount.toString()} />
      </View>
      <Input
        placeholder="Search recipes"
        size="large"
        style={styles.search}
        accessoryLeft={Icons.Search}
        value={myRecipeQuery}
        onChangeText={(newText) => setMyRecipeQuery(newText)}
      />
      <MyRecipes query={myRecipeQuery} userId={profile.id} />
    </Layout>
  );
};

export default GenericProfile;