import { gql } from '@apollo/client';
import * as Fragments from './fragments';

// eslint-disable-next-line import/prefer-default-export
export const ADD_RECIPE = gql`
  mutation addRecipe($recipe: RecipeInput!) {
    addRecipe(recipe: $recipe) {
      data {
        ...RecipeFragment
      }
      error {
        ...ErrorFragment
      }
    }
  }
  ${Fragments.RecipeFragment}
  ${Fragments.ErrorFragment}
`;

export const LOGIN = gql`
  mutation login($loginDetails: LoginInput!) {
    login(loginDetails: $loginDetails) {
      data {
        token
      }
      error {
        ...ErrorFragment
      }
    }
  }
  ${Fragments.ErrorFragment}
`;

export const SIGNUP = gql`
  mutation signup($signupDetails: SignupInput!) {
    signup(signupDetails: $signupDetails) {
      data {
        token
      }
      error {
        ...ErrorFragment
      }
    }
  }
  ${Fragments.ErrorFragment}
`;

export const EDIT_PROFILE = gql`
  mutation editProfile($profileDetails: ProfileDetails!) {
    editProfile(profileDetails: $profileDetails) {
      data {
        ...FullUserFragment
      }
      error {
        ...ErrorFragment
      }
    }
  }
  ${Fragments.ErrorFragment}
  ${Fragments.FullUserFragment}
`;

export const CHANGE_PASSWORD = gql`
  mutation changePassword($changePasswordDetails: ChangePasswordDetails!) {
    changePassword(changePasswordDetails: $changePasswordDetails) {
      error {
        message
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser {
    deleteAccount {
      error {
        message
      }
    }
  }
`;

export const UPDATE_DIETARY_PREFERENCES = gql`
  mutation UpdateDietaryPreferences($dietaryPreferences: DietaryPreferenceDetails!) {
    updateDietaryPreferences(dietaryPreferenceDetails: $dietaryPreferences) {
      error {
        ...ErrorFragment
      }
      data {
        ...DietFragment
      }
    }
  }
  ${Fragments.DietFragment}
  ${Fragments.ErrorFragment}
`;

export const REMOVE_DIETARY_PREFERENCES = gql`
  mutation RemoveDietaryPreferences($dietaryPreferences: DietaryPreferenceDetails!) {
    removeDietaryPreferences(dietaryPreferenceDetails: $dietaryPreferences) {
      error {
        ...ErrorFragment
      }
      data {
        ...DietFragment
      }
    }
  }
  ${Fragments.DietFragment}
  ${Fragments.ErrorFragment}
`;

export const UPDATE_ALLERGY_PREFERENCES = gql`
  mutation UpdateAllergyPreferences($allergyPreferences: AllergyPreferenceDetails!) {
    updateAllergyPreferences(allergyPreferenceDetails: $allergyPreferences) {
      error {
        ...ErrorFragment
      }
      data {
        ...AllergyFragment
      }
    }
  }
  ${Fragments.AllergyFragment}
  ${Fragments.ErrorFragment}
`;

export const REMOVE_ALLERGY_PREFERENCES = gql`
  mutation RemoveAllergyPreferences($allergyPreferences: AllergyPreferenceDetails!) {
    removeAllergyPreferences(allergyPreferenceDetails: $allergyPreferences) {
      error {
        ...ErrorFragment
      }
      data {
        ...AllergyFragment
      }
    }
  }
  ${Fragments.AllergyFragment}
  ${Fragments.ErrorFragment}
`;

export const UPDATE_PROFILE_VISIBILITY = gql`
  mutation UpdateProfileVisibility($profileVisibilityDetails: ProfileVisibilityDetails!) {
    updateProfileVisibility(profileVisibilityDetails: $profileVisibilityDetails) {
      error {
        ...ErrorFragment
      }
    }
  }
  ${Fragments.ErrorFragment}
`;