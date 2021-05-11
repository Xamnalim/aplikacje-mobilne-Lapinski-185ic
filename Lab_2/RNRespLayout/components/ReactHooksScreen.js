import React from "react";
import { View, Text, Button, Linking } from "react-native";

import { reactHooksScreenStyles as styles } from "../assets/styles/styles";

export default function ReactHooksScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>React Hooks useState</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Hooki są nowym dodatkiem w Reakcie 16.8. Pozwalają one na
          wykorzystanie stanu i innych funkcjonalności Reacta, bez użycia klas.
          Czym jest hook? Hook jest specjalną funkcją, która pozwala „zahaczyć
          się” w wewnętrzne mechanizmy Reacta. Na przykład useState jest
          hookiem, który pozwala korzystać ze stanu w komponencie funkcyjnym. W
          kolejnych rozdziałach poznamy inne hooki.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Źródło"
          color="hsl(357, 63%, 67%)"
          onPress={() =>
            Linking.openURL(
              "https://pl.reactjs.org/docs/hooks-state.html"
            )
          }
        />
      </View>
    </View>
  );
}
