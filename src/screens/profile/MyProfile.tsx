import React from "react";
import { Image, View, StyleSheet, SafeAreaView } from "react-native";
import {
  Text,
  Button,
  Icon,
  TopNavigation,
  TopNavigationAction,
  Avatar,
} from "@ui-kitten/components";

import {
  SafeAreaInsetsContext,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Icons } from "@greeneggs/core";

const styles = StyleSheet.create({
  avatarContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  avatar: {
    margin: 8,
    width: 120,
    height: 120,
  },
  view: {
    backgroundColor: "#F7F9FC",
    height: "100%",
  },
  description: {
    padding: 16,
  },
  button: {
    width: 99,
    height: 32,
  },
  topButton: {
    width: 24,
    height: 24,
    backgroundColor: "transparent",
    borderColor: "transparent",
  },
  profileContainer: {
    flex: 1,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  statBox: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: 65,
    height: 32,
  },
});

const MyProfile = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();

  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ ...styles.view }}>
      <TopNavigation
        style={{ backgroundColor: "transparent", paddingTop: insets.top }}
        accessoryLeft={() => (
          <TopNavigationAction
            icon={Icons.Settings}
            onPress={() => navigation.navigate("Settings")}
          />
        )}
        accessoryRight={() => (
          <>
            <TopNavigationAction
              icon={Icons.AddPerson}
              onPress={navigateBack}
            />
            <TopNavigationAction icon={Icons.More} onPress={navigateBack} />
          </>
        )}
      />
      <View style={styles.avatarContainer}>
        <Avatar
          style={styles.avatar}
          shape="round"
          size="giant"
          source={require("../../assets/images/banner.jpg")}
        />
      </View>
      <View style={styles.profileContainer}>
        <Text category="h5">data.firstName</Text>
        <Button style={styles.button} accessoryLeft={Icons.Edit}>
          EDIT
        </Button>
      </View>
      <Text style={styles.description} numberOfLines={2}>
        Profile Description
      </Text>
      <View style={styles.statContainer}>
        <View style={styles.statBox}>
          <Text>0</Text>
          <Text>Following</Text>
        </View>
        <View style={styles.statBox}>
          <Text>0</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.statBox}>
          <Text>0</Text>
          <Text>Recipes</Text>
        </View>
        <View style={styles.statBox}>
          <Text>0</Text>
          <Text>Likes</Text>
        </View>
      </View>
    </View>
  );
};

export default MyProfile;
