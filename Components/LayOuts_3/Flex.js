import React from "react";
import { Text, View } from "react-native";

const Flex = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "orange" }}>
      <View style={{ flex: 1, backgroundColor: "blue" }} />
      <View style={{ flex: 1, backgroundColor: "dodgerblue" }} />
      <View style={{ flex: 1, backgroundColor: "orange" }} />
      <View style={{ flex: 1, backgroundColor: "lightblue" }} />
    </View>
  );
};

export default Flex;
