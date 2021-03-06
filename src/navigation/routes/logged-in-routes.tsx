/**
 * Author: Edward Jones
 */
import React from 'react';
import { Stack } from '../stack';
import * as Screens from "../../screens";
import { Navigation } from "@greeneggs/navigation";

/**
 * Array containing a list of all screens accessible to logged in users.
 */
export const LoggedInRoutes = [
  <Stack.Screen name="Home" component={Navigation} />,
  <Stack.Screen name="Recipe" component={Screens.Recipe} />,
  <Stack.Screen
    name="RecipeDescription"
    component={Screens.RecipeDescription}
  />,
  <Stack.Screen
    name="CreateStep"
    component={Screens.CreateStep}
  />,
  <Stack.Screen
    name="CreateDiet"
    component={Screens.CreateDiet}
  />,
  <Stack.Screen
    name="CreateAllergy"
    component={Screens.CreateAllergy}
  />,
  <Stack.Screen name="Settings" component={Screens.Settings} />,
  <Stack.Screen
    name="EditProfile"
    component={Screens.EditProfile}
  />,
  <Stack.Screen
    name="EditProfilePicture"
    component={Screens.EditProfilePicture}
  />,
  <Stack.Screen
    name="ChangePassword"
    component={Screens.ChangePassword}
  />,
  <Stack.Screen
    name="DeleteAccount"
    component={Screens.DeleteAccount}
  />,
  <Stack.Screen
    name="Diets"
    component={Screens.DietaryPreferences}
  />,
  <Stack.Screen
    name="Allergies"
    component={Screens.AllergyPreferences}
  />,
  <Stack.Screen
    name="ProfileVisibility"
    component={Screens.ProfileVisibility}
  />,
  <Stack.Screen
    name="RecipeAllComments"
    component={Screens.RecipeAllComments}
  />,
  <Stack.Screen
    name="RecipeCommentReplies"
    component={Screens.RecipeCommentReplies}
  />,
  <Stack.Screen
    name="RecipeAllIngredients"
    component={Screens.RecipeAllIngredients}
  />,
  <Stack.Screen
    name="RecipeDirectionExpanded"
    component={Screens.RecipeDirectionExpanded}
  />,
  <Stack.Screen
    name="SavedRecipes"
    component={Screens.SavedRecipes}
  />,
  <Stack.Screen name="Profile" component={Screens.Profile} />,
  <Stack.Screen name="RecipeSearchFilter" component={Screens.RecipeSearchFilter} />,
  <Stack.Screen name="FilterIngredientsIncluded" component={Screens.FilterIngredientsIncluded} />,
  <Stack.Screen name="FilterIngredientsExcluded" component={Screens.FilterIngredientsExcluded} />,
  <Stack.Screen name="FilterRecipeCategories" component={Screens.FilterRecipeCategories} />,
  <Stack.Screen name="FilterRecipeAllergies" component={Screens.FilterRecipeAllergies} />,
  <Stack.Screen name="FilterRecipeDiets" component={Screens.FilterRecipeDiets} />,
  <Stack.Screen name="FilterRecipeCookTime" component={Screens.FilterRecipeCookTime} />,
  <Stack.Screen name="Following" component={Screens.Following} />,
  <Stack.Screen name="Followers" component={Screens.Followers} />,
  <Stack.Screen name="Category" component={Screens.Category} />,
  <Stack.Screen name="AllCategories" component={Screens.AllCategories} />,
  <Stack.Screen name="PickCategory" component={Screens.PickCategory} />,
  <Stack.Screen name="PickIngredient" component={Screens.PickIngredient} />,
  <Stack.Screen
    name="AddIngredientDetails"
    component={Screens.AddIngredientDetails}
  />,
 ]
