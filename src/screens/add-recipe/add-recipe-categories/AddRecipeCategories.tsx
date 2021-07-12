import React from "react";
import { List, ListItem, Text } from "@ui-kitten/components";
import { ScrollView } from "react-native";
import { addRecipeStyles, RecipeForm } from "../AddRecipe";
import AddListItem from "@greeneggs/core/add-list-item/AddListItem";

interface IAddRecipeCategories {
  form: RecipeForm;
  navigation: any;
}

const AddRecipeCategories = ({ form, navigation }: IAddRecipeCategories) => (
  <ScrollView>
    <Text
      category="h5"
      style={{ ...addRecipeStyles.heading, ...addRecipeStyles.view }}
    >
      Categories
    </Text>
    <List
      data={form.watch("categories")}
      renderItem={({ item }) => (
        <>
          <ListItem title={item.name} />
        </>
      )}
    />
    <AddListItem
      label="ADD CATEGORY"
      onPress={() =>
        navigation.navigate("CreateCategory", {
          form,
          index: form.getValues("categories")?.length || 0,
        })
      }
    />
  </ScrollView>
);

export default AddRecipeCategories;
