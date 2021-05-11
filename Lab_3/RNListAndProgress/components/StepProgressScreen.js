import React from "react";
import { View, Text } from "react-native";

import { avoidStatusBar } from "../assets/styles/styles";

export default function StepProgressScreen() {
  return (
    <View style={avoidStatusBar}>
      <Text>StepProgressScreen</Text>
    </View>
  );
}
