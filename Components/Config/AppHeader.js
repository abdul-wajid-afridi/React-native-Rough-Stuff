import React from "react";
import { Platform, StyleSheet, Text } from "react-native";
import Colors from "./Colors";

const AppHeader = ({ children }) => {
  return <Text style={styles.header}>{children}</Text>;
};

export default AppHeader;
const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: Colors.black,
  },
});
