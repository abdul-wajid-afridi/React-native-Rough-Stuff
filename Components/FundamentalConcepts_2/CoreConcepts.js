import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CoreConcepts = () => {
  return (
    <View style={styles.container}>
      <Text>
        The Above is A view Which Wraps All the Contents Just Like a div in Web
      </Text>
      <Text>THis is A Text</Text>
    </View>
  );
};

export default CoreConcepts;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
