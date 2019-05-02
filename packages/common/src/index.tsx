/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { useContext } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Router } from "./Router";
import { CounterStoreContext } from "./stores/CounterStore";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export const App = () => {
  const CounterStore = useContext(CounterStoreContext);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Router />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: '100%'
  },
  wrapper: {
    flex: 1,
    width: "100%",
    maxWidth: 425,
    backgroundColor: "#F5FCFF"
  }
});
