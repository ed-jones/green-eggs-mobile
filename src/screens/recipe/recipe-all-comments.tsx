/**
 * Author: Dimitri Zvolinski
 */
import React from "react";
import { RecipeCommentList } from "./recipe-comment-list";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text } from "@ui-kitten/components";
import { TopNavigation } from "@greeneggs/ui";

const styles = StyleSheet.create({
  content: {
    padding: 16,
  },
});

/**
 * Screen that displays a list of all comments for a recipe.
 */
export function RecipeAllComments({ route }: any) {
  const { comments, commentCount, isReply } = route.params;

  return (
    <>
      <TopNavigation title={`All ${isReply ? "Replies" : "Comments"}`} />
      <ScrollView>
        <View style={styles.content}>
          <Text style={{ marginBottom: 24 }} category="h5">{`All ${
            isReply ? "Replies" : "Comments"
          } (${commentCount})`}</Text>
          <RecipeCommentList comments={comments} />
        </View>
      </ScrollView>
    </>
  );
}
