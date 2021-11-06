import React from "react";
import { StyleSheet, View, Platform, StatusBar } from "react-native";

const ContainerStatus = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default ContainerStatus;
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
