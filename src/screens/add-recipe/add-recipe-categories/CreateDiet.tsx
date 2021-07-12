import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  Button,
  Input,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Icons } from "@greeneggs/core";
import ControlledInput, {
  InputType,
  Rules,
} from "@greeneggs/core/controlled-input/ControlledInput";
import { RecipeInput } from "@greeneggs/types/graphql";
import { RecipeForm } from "../AddRecipe";

const styles = StyleSheet.create({
  view: {
    paddingHorizontal: 16,
  },
});

const CreateDiet = ({ navigation, route }: any) => {
  const { form, index } = route.params as { form: RecipeForm; index: number };

  const insets = useSafeAreaInsets();
  return (
    <View style={styles.view}>
      <TopNavigation
        style={{ backgroundColor: "transparent", paddingTop: insets.top }}
        alignment="center"
        title="Add Diet"
        accessoryLeft={() => (
          <TopNavigationAction
            icon={Icons.Back}
            onPress={() => navigation.goBack()}
          />
        )}
      />
      <ControlledInput<RecipeInput>
        controllerProps={{
          name: `diets.${index}.name`,
          control: form.control,
          rules: {
            ...Rules.UNDER100CHARS,
            ...Rules.REQUIRED,
          },
        }}
        inputProps={{
          label: "DIET",
          placeholder: "Vegetarian",
          defaultValue: "",
        }}
        submitError={form.formResult.data?.addRecipe.error}
        type={InputType.TEXT}
      />
      <Button
        onPress={() => {
          form
            .trigger([`diets.${index}.name`])
            .then((isValid) => (isValid ? navigation.goBack() : undefined));
        }}
      >
        ADD DIET
      </Button>
    </View>
  );
};

export default CreateDiet;