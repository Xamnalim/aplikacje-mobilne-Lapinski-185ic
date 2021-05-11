import { StyleSheet, StatusBar, Platform } from "react-native";

const avoidStatusBar = StyleSheet.create({
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
});

export { avoidStatusBar };
