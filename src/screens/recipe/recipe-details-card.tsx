/**
 * Author: Dimitri Zvolinski
 */
import React from "react";
import { noAvatar } from "@greeneggs/assets";
import { CommentCounter, LabelledIcon, ViewMore } from "@greeneggs/ui";
import { convertTimeEstimate } from "@greeneggs/utils";
import { View, StyleSheet, Pressable } from "react-native";
import { recipe_recipe_data } from "@greeneggs/types/graphql";
import { Text, Card, Avatar } from "@ui-kitten/components";
import { RecipeCategoriesTags } from "./recipe-categories-tags";
import { RecipeLikeCounter } from "@greeneggs/ui";
import { useNavigateToProfile } from "@greeneggs/navigation";

const styles = StyleSheet.create({
  cardSection: {
    padding: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: {
    marginRight: 10,
  },
});

interface IRecipeDetailsCard extends recipe_recipe_data {
  navigation: any;
}

/**
 * Card for displaying simple recipe details, such as title, abbreviated description and stats.
 */
export const RecipeDetailsCard = ({
  navigation,
  title,
  timeEstimate,
  description,
  createdAt,
  submittedBy,
  likeCount,
  commentCount,
  categories,
  id,
  liked,
  comments,
}: IRecipeDetailsCard) => {
  const navigateToDescription = () => {
    navigation.navigate("RecipeDescription", {
      description: description,
      createdAt: createdAt,
      title: title,
      submittedBy: submittedBy,
    });
  };
  const navigateToProfile = useNavigateToProfile();
  return (
    <Card
      header={() => (
        <View style={styles.cardSection}>
          <View style={styles.row}>
            <Text category="h5" style={{ flexShrink: 1 }}>
              {title}
            </Text>
            {timeEstimate ? (
              <LabelledIcon
                label={convertTimeEstimate(timeEstimate).toUpperCase()}
                iconName="clock-outline"
              />
            ) : undefined}
          </View>
          <View style={{ ...styles.row, marginTop: 8 }}>
            <RecipeCategoriesTags categories={categories} />
          </View>
        </View>
      )}
      footer={() => (
        <View style={styles.cardSection}>
          {description ? (
            <Text numberOfLines={2}>{description}</Text>
          ) : undefined}
          <ViewMore
            style={{ paddingHorizontal: 0, marginTop: 8 }}
            onPress={navigateToDescription}
          />
        </View>
      )}
    >
      <View style={styles.row}>
        <Pressable onPress={() => navigateToProfile(submittedBy.id)}>
          <View style={styles.row}>
            <Avatar
              size="small"
              source={
                submittedBy.avatarURI
                  ? { uri: submittedBy.avatarURI }
                  : noAvatar
              }
              style={styles.avatar}
            />
            <Text
              style={{ fontWeight: "bold" }}
            >{`${submittedBy.firstName} ${submittedBy.lastName}`}</Text>
          </View>
        </Pressable>
        <View style={styles.row}>
          <RecipeLikeCounter
            likeCount={likeCount}
            liked={liked}
            recipeId={id}
            submittedById={submittedBy.id}
          />
          <CommentCounter commentCount={commentCount} comments={comments} />
        </View>
      </View>
    </Card>
  );
};
