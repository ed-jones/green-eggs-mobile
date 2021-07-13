import React from "react";
import { List, ListItem, Text } from "@ui-kitten/components";
import { ScrollView } from "react-native";
import { addRecipeStyles, RecipeForm } from "../AddRecipe";
import AddListItem from "@greeneggs/core/add-list-item/AddListItem";
import Alert from "@greeneggs/core/alert/Alert";

interface IAddRecipeAllergies {
  form: RecipeForm;
  navigation: any;
}

const AddRecipeAllergies = ({ form, navigation }: IAddRecipeAllergies) => (
  <ScrollView>
    <Alert
      type="danger"
      message={
        <Text>
          Make sure to specify any food in this recipe that may trigger
          allergies, such as <Text style={{ fontWeight: "bold" }}>Milk</Text>,{" "}
          <Text style={{ fontWeight: "bold" }}>Eggs</Text> and{" "}
          <Text style={{ fontWeight: "bold" }}>Peanuts</Text>.
        </Text>
      }
      style={addRecipeStyles.view}
    />
    <Text
      category="h5"
      style={{ ...addRecipeStyles.heading, ...addRecipeStyles.view }}
    >
      Allergies
    </Text>
    <List
      data={form.watch("allergies")}
      renderItem={({ item }) => (
        <>
          <ListItem title={item.name} />
        </>
      )}
    />
    <AddListItem
      label="ADD ALLERGY"
      onPress={() =>
        navigation.navigate("CreateAllergy", {
          form,
          index: form.getValues("allergies")?.length || 0,
        })
      }
    />
  </ScrollView>
);

export default AddRecipeAllergies;