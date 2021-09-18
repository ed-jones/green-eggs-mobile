import { gql } from '@apollo/client';

export const UserFragment = gql`
  fragment UserFragment on User {
    id
    firstName
    lastName
    bio
    email
    avatarURI
    verified
  }
`;

export const DietFragment = gql`
  fragment DietFragment on Diet {
    id
    name
  }
`;

export const AllergyFragment = gql`
  fragment AllergyFragment on Allergy {
    id
    name
  }
`;

export const FullUserFragment = gql`
  fragment FullUserFragment on FullUser {
    id
    firstName
    lastName
    bio
    email
    avatarURI
    verified
    likeCount
    followerCount
    followingCount
    recipeCount
    isFollowing
    dietaryPreferences {
      ...DietFragment
    }
    allergyPreferences {
      ...AllergyFragment
    }
    visibility
  }
  ${DietFragment}
  ${AllergyFragment}
`;


export const RecipeFragment = gql`
  fragment RecipeFragment on Recipe {
    id
    subtitle
    title
    description
    submittedBy {
      ...UserFragment
    }
    commentCount
    likeCount
    createdAt
    servingCount
    timeEstimate
    coverImage
    categories {
      name
    }
    diets {
      name
    }
    allergies {
      name
    }
    ingredients {
      name
      description
      quantity
      unit
    }
    steps {
      title
      description
      image
    }
  }
  ${UserFragment}
`;

export const ErrorFragment = gql`
  fragment ErrorFragment on Error {
    message
  }
`;
