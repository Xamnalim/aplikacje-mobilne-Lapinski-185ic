import React from "react";
import { View, Text, Button, Linking } from "react-native";

import { restParamsScreenStyles as styles } from "../assets/styles/styles";

export default function RestParamsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Rest parameters</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Składnia parametru rest pozwala funkcji przyjąć nieokreśloną liczbę
          argumentów jako tablicę, umożliwiając tworzenie funkcji o zmiennej
          ilości argumentów w JavaScript.
        </Text>
      </View>
      <Button
        title="Źródło"
        color="hsl(235, 29%, 61%)"
        onPress={() =>
          Linking.openURL(
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters"
          )
        }
      />
    </View>
  );
}
