import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator, MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { TabBar, Tab } from '@ui-kitten/components';
import AllRecipes from '../all-recipes/AllRecipes';

const { Navigator, Screen } = createMaterialTopTabNavigator();

const TopTabBar = ({ navigation, state }: MaterialTopTabBarProps) => (
  <TabBar
    indicatorStyle={{ backgroundColor: '#2E3A59', height: 2 }}
    style={{ backgroundColor: 'transparent', margin: 8 }}
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <Tab title="NEWS FEED" />
    <Tab title="TRENDING" />
    <Tab title="CATEGORIES" />
  </TabBar>
);

export default function HomeTabs() {
  return (
    <NavigationContainer independent>
      <Navigator
        tabBar={(props: MaterialTopTabBarProps) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <TopTabBar {...props} />
        )}
      >
        <Screen name="NEWS FEED" component={AllRecipes} />
        <Screen name="TRENDING" component={AllRecipes} />
        <Screen name="CATEGORIES" component={AllRecipes} />
        <Screen name="MY RECIPES" component={AllRecipes} />
      </Navigator>
    </NavigationContainer>
  );
}
