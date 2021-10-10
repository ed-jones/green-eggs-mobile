import React, { FC, useContext, useState } from "react";
import { Icons, Queries } from "@greeneggs/core";
import {
  Divider,
} from "@ui-kitten/components";
import Input from '@greeneggs/core/input';
import { useNavigation } from "@react-navigation/core";
import {
  Ingredients,
  IngredientsVariables,
  Ingredients_ingredients_data,
  RecipeFilter,
  Sort,
} from "@greeneggs/types/graphql";
import { AlphabetType } from "@greeneggs/core/alpha-list";
import LazyListAlpha from "@greeneggs/core/lazy-alpha-list";
import AddToFilter from "../common/add-to-filter";
import SelectableListItem from "@greeneggs/core/selectable-list-item";
import { SearchContext } from "@greeneggs/providers/SearchStateProvider";
import TopNavigationGeneric from "@greeneggs/core/top-navigation-generic";
import Background from "@greeneggs/core/background";

const FilterIngredientsIncluded: FC = () => {
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
      <TopNavigationGeneric title="Ingredients (included)" />
      <Input
        style={{ padding: 16, backgroundColor: "white" }}
        placeholder="Search Ingredients"
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
        emptyMessage={"No ingredients found"}
        errorMessage={"Error"}
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

export default FilterIngredientsIncluded;
