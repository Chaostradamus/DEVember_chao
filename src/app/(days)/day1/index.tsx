import { View, Text } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'Day 1' }} />

      <Text style={{ fontFamily: 'AmaticBold', fontSize: 100 }}>
      you sucks haha
      </Text>
    </View>
  );
};

export default DayDetailsScreen;
