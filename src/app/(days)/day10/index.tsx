import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";
import { SafeAreaView } from "react-native-safe-area-context";

const description = `
# Biometrics
use faceID and fingerprint to unlock next screens`;

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 10: Biometrics" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day10/protected" asChild>
        <Button title="Go to Weather" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
