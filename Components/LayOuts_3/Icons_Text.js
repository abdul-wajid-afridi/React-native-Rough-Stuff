import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../Config/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../Config/AppText";

const Icons_Text = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>The Text Decoraton</Text>
      <MaterialCommunityIcons name="email" style={styles.icon} />
      <MaterialCommunityIcons name="facebook" color={Colors.dodger} size={50} />
      <AppText>The Text shines</AppText>
    </View>
  );
};

export default Icons_Text;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    color: Colors.black,
    borderWidth: 2,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: "orange",
    padding: 5,
    elevation: 15,
  },
  icon: {
    color: "white",
    fontSize: 50,
    backgroundColor: "red",
    borderRadius: 25,
    elevation: 20,
  },
});
