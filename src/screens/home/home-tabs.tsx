/**
 * Author: Edward Jones
 */
import React from 'react';
import { createMaterialTopTabNavigator, MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { TabBar, Tab } from '@ui-kitten/components';
import { NewsFeed } from './news-feed';
import { Trending } from './trending';
import { Categories } from './categories';

const { Navigator, Screen } = createMaterialTopTabNavigator();

/**
 * Tab bar that lets a user switch between trending, news feed and categories on the home page.
 */
const TopTabBar = ({ navigation, state }: MaterialTopTabBarProps) => (
  <TabBar
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <Tab title="TRENDING" />
    <Tab title="NEWS FEED" />
    <Tab title="CATEGORIES" />
  </TabBar>
);

/**
 * Provides navigation logic for the rendered tab bar.
 */
export function HomeTabs() {
  return (
    <Navigator
      tabBar={(props: MaterialTopTabBarProps) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <TopTabBar {...props} />
      )}
    >
      <Screen name="TRENDING" component={Trending} />
      <Screen name="NEWS FEED" component={NewsFeed} />
      <Screen name="CATEGORIES" component={Categories} />
    </Navigator>
  );
}
