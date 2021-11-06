import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "./Colors";

const AppText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    // fontFamily: Platform.OS == "android" ? "Roboto" : "Avenir",
    fontFamily: "Roboto",
    fontSize: 18,
    color: "tomato",
  },
});
export default AppText;
