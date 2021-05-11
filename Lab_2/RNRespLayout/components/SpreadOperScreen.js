import React from "react";
import { View, Text, Button, Linking } from "react-native";

import { spreadOperScreenStyles as styles } from "../assets/styles/styles";

export default function SpreadOperScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Spread syntax (...)</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Składnia rozwinięcia (ang. spread syntax) pozwala na rozwinięcie
          iterowalnego wyrażenia, takiego jak wyrażenie tablicowe lub ciąg
          znaków, tam gdzie oczekiwanych jest zero lub więcej argumentów (dla
          wywołań funkcji) lub elementów (dla literałów tablicowych). Pozwala
          również na rozwinięcie wyrażeń obiektowych w miejscach, gdzie
          oczekiwanych jest zero lub więcej par klucz-wartość (dla literałów
          obiektowych).
        </Text>
      </View>
      <Button
        title="Źródło"
        color="hsl(266, 10%, 41%)"
        onPress={() =>
          Linking.openURL(
            "https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Operators/Spread_syntax"
          )
        }
      />
    </View>
  );
}
