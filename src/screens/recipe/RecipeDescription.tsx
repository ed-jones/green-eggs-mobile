import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from '@ui-kitten/components';
import { TopNavigation } from '@greeneggs/ui';
import Background from '@greeneggs/core/background';

const styles = StyleSheet.create({
  cardElement: {
    paddingHorizontal: 28,
    paddingVertical: 16
  }
})

const RecipeDescription = (
  { route }: any
) => {
  const { description, createdAt, title, submittedBy } = route.params;

  return (
    <Background>
      <TopNavigation title="Description" />
      <Card
        header={() => (
          <View style={styles.cardElement}>
            <Text category="h6">{title}</Text>
            <Text category="s1">{`Created by ${submittedBy.firstName} ${submittedBy.lastName}`}</Text>
          </View>
        )}
        footer={() => (
          <Text style={styles.cardElement}>
            {(new Date(Number(createdAt))).toDateString()}
          </Text>
        )}
      >
        <Text>{description}</Text>
      </Card>
    </Background>
  )
};

export default RecipeDescription;
