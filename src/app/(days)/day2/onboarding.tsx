import { Stack } from "expo-router";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.pageContent}>
        <FontAwesome5
          style={styles.image}
          name="people-arrows"
          size={70}
          color="#CEF202"
        />
        <View>
          <Text style={styles.title}>Track every transaction</Text>
          <Text style={styles.description}>
            Monitor your spending and contribution, ensuring every penny aligns
            with your family's aspirations
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  page: {
    // alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#15141A",

    padding: 20,
  },
  pageContent: {
    padding: 20,
    flex: 1,
  },

  image: {
    alignSelf: "center",
    margin: 20,
  },
  title: {
    color: "FDFDFD",
    fontSize: 26,
    fontFamily: "InterBold",
    letterSpacing: 1.3,
    marginVertical: 20,
  },
  description: {
    color: "gray",
    fontSize: 18,
    fontFamily: "Inter",
  },
  footer: {
    marginTop: "auto",
  },
});
