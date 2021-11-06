import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Colors from "./Colors";

const AppText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    // fontFamily: Platform.OS == "android" ? "Roboto" : "Avenir",
    fontFamily: "Avenir",
    fontSize: 18,
    color: Colors.black,
  },
});
export default AppText;
