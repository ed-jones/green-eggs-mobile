import React from "react";
import { recipe_recipe_data_ingredients } from "@greeneggs/types/graphql";
import { View } from "react-native";
import {
  Divider,
  List,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import IngredientListItem from "@greeneggs/core/ingredient-list-item/IngredientListItem";
import ViewMore from "@greeneggs/core/view-more/ViewMore";
import { useNavigation } from "@react-navigation/core";

interface IRecipeIngredients {
  ingredients: recipe_recipe_data_ingredients[];
}

const RecipeIngredients = ({ ingredients }: IRecipeIngredients) => {
  const navigation = useNavigation();
  return (
    <View style={{ marginHorizontal: -16 }}>
      {ingredients
        .slice(0, 5)
        .map((ingredient: recipe_recipe_data_ingredients, index) => (
          <IngredientListItem ingredient={ingredient} key={index.toString()} />
        ))}
      <Divider />
      <ViewMore
        onPress={() =>
          navigation.navigate("RecipeAllIngredients", {
            ingredients,
          })
        }
      />
    </View>
  );
};

export default RecipeIngredients;
