import React from "react";
import { Text } from "@ui-kitten/components";
import { ScrollView } from "react-native";
import { InputType, Rules, ControlledInput, Callout } from "@greeneggs/ui";
import { RecipeInput } from "@greeneggs/types/graphql";
import { RecipeForm } from "./add-recipe";
import { AddRecipeStyles } from "./add-recipe-styles";

interface ICreateRecipeDetails {
  form: RecipeForm;
}

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
