import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 3: Markdown" }} />
      <Text>Day Details Screen</Text>

      <Link href="/day3/editor" asChild>
        <Button title="Go to onboarding" />
      </Link>
    </View>
  );
};

export default DayDetailsScreen;
