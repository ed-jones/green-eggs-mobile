import React from "react";
import { Button } from "@ui-kitten/components";
import ControlledInput, {
  InputType,
  Rules,
} from "@greeneggs/core/controlled-input/ControlledInput";
import { RecipeInput } from "@greeneggs/types/graphql";
import { addRecipeStyles } from "../AddRecipe";
import CreateRecipePartTemplate, {
  RecipeFormPart,
} from "../CreateRecipePartTemplate";

const CreateIngredient = ({ navigation, route }: any) => (
  <CreateRecipePartTemplate
    title="Create Ingredient"
    navigation={navigation}
    route={route}
    formComponent={CreateIngredientForm}
  />
);

const CreateIngredientForm = ({ form, index, navigation }: RecipeFormPart) => (
  <>
    <ControlledInput<RecipeInput>
      controllerProps={{
        name: `ingredients.${index}.name`,
        control: form.control,
        rules: {
          ...Rules.REQUIRED,
          ...Rules.UNDER100CHARS,
        },
      }}
      inputProps={{
        label: "INGREDIENT NAME",
        placeholder: "Carrot",
        defaultValue: "",
        style: addRecipeStyles.input,
      }}
      submitError={form.formResult.data?.addRecipe.error}
      type={InputType.TEXT}
    />
    <ControlledInput<RecipeInput>
      controllerProps={{
        name: `ingredients.${index}.description`,
        control: form.control,
        rules: {
          ...Rules.UNDER100CHARS,
        },
      }}
      inputProps={{
        label: "DESCRIPTION (OPTIONAL)",
        placeholder: "Finely chopped",
        defaultValue: "",
        style: addRecipeStyles.input,
      }}
      submitError={form.formResult.data?.addRecipe.error}
      type={InputType.TEXT}
    />
    <ControlledInput<RecipeInput>
      controllerProps={{
        name: `ingredients.${index}.quantity`,
        control: form.control,
        rules: {
          ...Rules.REQUIRED,
        },
      }}
      inputProps={{
        label: "QUANTITY",
        placeholder: "5",
        defaultValue: "",
        style: addRecipeStyles.input,
      }}
      submitError={form.formResult.data?.addRecipe.error}
      type={InputType.NUMERIC}
    />
    <ControlledInput<RecipeInput>
      controllerProps={{
        name: `ingredients.${index}.unit`,
        control: form.control,
        rules: {
          ...Rules.UNDER100CHARS,
        },
      }}
      inputProps={{
        label: "UNIT (OPTIONAL)",
        placeholder: "Cups",
        defaultValue: "",
        style: addRecipeStyles.input,
      }}
      submitError={form.formResult.data?.addRecipe.error}
      type={InputType.TEXT}
    />
    <Button
      onPress={() => {
        form
          .trigger([
            `ingredients.${index}.name`,
            `ingredients.${index}.description`,
            `ingredients.${index}.quantity`,
            `ingredients.${index}.unit`,
          ])
          .then((isValid) => (isValid ? navigation.goBack() : undefined));
      }}
    >
      ADD INGREDIENT
    </Button>
  </>
);

export default CreateIngredient;
