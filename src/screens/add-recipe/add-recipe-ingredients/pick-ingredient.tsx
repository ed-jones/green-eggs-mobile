/**
 * Author: Edward Jones
 */
import React, { FC, useState } from "react";
import {
  AlphabetType,
  Background,
  Icons,
  Input,
  LazyListAlpha,
  TopNavigation,
} from "@greeneggs/ui";
import {
  IngredientInput,
  Ingredients,
  IngredientsVariables,
  Ingredients_ingredients_data,
  RecipeFilter,
  Sort,
} from "@greeneggs/types/graphql";
import { Button, Divider, ListItem } from "@ui-kitten/components";
import { Queries } from "@greeneggs/graphql";
import { toTitleCase } from "@greeneggs/utils";
import { useNavigation } from "@react-navigation/core";

/**
 * Screen that shows an infinite scrolling list of all generic ingredients
 * in the database that a user can select from or create a new one to add to their recipe.
 */
export const PickIngredient: FC = () => {
  const [query, setQuery] = useState("");
  const navigation = useNavigation();

  function pick(ingredient: IngredientInput) {
    navigation.navigate("AddIngredientDetails", { name: ingredient.name });
  }

  return (
    <Background>
      <TopNavigation title="Pick an ingredient" />
      <Input
        style={{ padding: 16, backgroundColor: "white" }}
        placeholder="Search ingredients..."
        accessoryLeft={Icons.Search}
        onChangeText={setQuery}
        value={query}
        autoFocus
      />
      <LazyListAlpha<
        Ingredients,
        IngredientsVariables,
        Ingredients_ingredients_data,
        Sort,
        RecipeFilter
      >
        renderItem={(item) => (
          <>
            <ListItem title={item.name} onPress={() => pick(item)} />
            <Divider />
          </>
        )}
        categoriseItem={(item) => item.name[0].toLowerCase() as AlphabetType}
        query={Queries.GET_INGREDIENTS}
        ListFooterComponent={
          query.length > 0 ? (
            <Button
              style={{ marginHorizontal: 16, marginTop: 16 }}
              onPress={() => pick({ name: toTitleCase(query) })}
            >
              {`CREATE "${query.toUpperCase()}"`}
            </Button>
          ) : undefined
        }
        variables={{
          query,
        }}
        dataKey="ingredients"
      />
    </Background>
  );
};
