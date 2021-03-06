/**
 * Author: Edward Jones
 */
import React from "react";
import { ScrollView } from "react-native";
import { InputType, Rules, ControlledInput } from "@greeneggs/ui";
import { RecipeInput } from "@greeneggs/types/graphql";
import { RecipeForm } from "./add-recipe";

interface ICreateRecipeDetails {
  form: RecipeForm;
}

/**
 * Last screen in the recipe creation process.
 * Lets a user add a cover photo for a recipe and publish.
 */
export const PublishRecipe = ({ form }: ICreateRecipeDetails) => (
  <ScrollView style={{ padding: 16 }}>
    <ControlledInput<RecipeInput>
      controllerProps={{
        name: "coverImage",
        control: form.control,
        rules: {
          ...Rules.REQUIRED,
        },
      }}
      inputProps={{ label: "COVER IMAGE" }}
      submitError={form.formResult.data?.addRecipe.error}
      type={InputType.PHOTO}
    />
  </ScrollView>
);
