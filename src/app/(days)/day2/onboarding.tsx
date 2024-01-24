import { Stack } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function OnboardingScreen() {
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <Text style={styles.title}>Track every transaction</Text>
      <Text style={styles.description}>
        Monitor your spending and contribution, ensuring every penny aligns with
        your family's aspirations
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  page: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  image: {},
  title: {},
  description: {},
});
