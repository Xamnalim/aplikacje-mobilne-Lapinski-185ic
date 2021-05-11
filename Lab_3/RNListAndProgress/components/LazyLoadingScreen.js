import React from "react";
import { View, Text } from "react-native";

import { avoidStatusBar } from "../assets/styles/styles";

export default function LazyLoadingScreen() {
  return (
    <View style={avoidStatusBar}>
      <Text>LazyLoadingScreen</Text>
    </View>
  );
}
