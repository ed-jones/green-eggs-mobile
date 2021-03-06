/**
 * Author: Victor Ying
 */
import React, { FC, useContext, useState } from "react";
import { Queries } from "@greeneggs/graphql";
import {
  Divider,
} from "@ui-kitten/components";
import { Input, Icons, EmptyState } from '@greeneggs/ui';
import { useNavigation } from "@react-navigation/core";
import {
  Ingredients,
  IngredientsVariables,
  Ingredients_ingredients_data,
  RecipeFilter,
  Sort,
} from "@greeneggs/types/graphql";
import { SearchContext } from "@greeneggs/providers/search-state-provider";
import { TopNavigation, Background, AlphabetType, LazyListAlpha, SelectableListItem } from "@greeneggs/ui";

import { AddToFilter } from "../common";
import { View } from "react-native";

/**
 * Screen for requiring ingredients in a search
 */
export const FilterIngredientsIncluded: FC = () => {
  const navigation = useNavigation();
  const [query, setQuery] = useState("");
  const { searchState, setSearchState } = useContext(SearchContext);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>(
    searchState.filter.ingredients?.includes ?? []
  );

  const setSelected = (selected: boolean, id: string) => {
    setSelectedIngredients(
      selected
        ? [...selectedIngredients, id]
        : [...selectedIngredients.filter((excludes) => excludes !== id)]
    );
  };

  const addToFilter = () => {
    setSearchState?.({
      ...searchState,
      filter: {
        ...searchState.filter,
        ingredients: {
          ...searchState.filter.ingredients,
          includes: selectedIngredients,
        },
      },
    });
    navigation.goBack();
  };

  return (
    <Background>
      <TopNavigation title="Ingredients (included)" />
      <Input
        style={{ padding: 16, backgroundColor: "white" }}
        placeholder="Search ingredients..."
        accessoryLeft={Icons.Search}
        onChangeText={setQuery}
        value={query}
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
            <SelectableListItem
              title={item.name}
              selected={selectedIngredients.includes(item.id)}
              setSelected={(selected) => setSelected(selected, item.id)}
            />
            <Divider />
          </>
        )}
        categoriseItem={(item) => item.name[0].toLowerCase() as AlphabetType}
        query={Queries.GET_INGREDIENTS}
        contentContainerStyle={{ flexGrow: 1 }}
        ListEmptyComponent={
          <View style={{ flexGrow: 1, justifyContent: "center" }}>
            <EmptyState description="Couldn't find any ingredients." />
          </View>
        }
        variables={{
          query,
        }}
        dataKey="ingredients"
      />
      <AddToFilter
        clearFilters={() => setSelectedIngredients([])}
        filterCount={selectedIngredients.length}
        addToFilter={addToFilter}
      />
    </Background>
  );
};
