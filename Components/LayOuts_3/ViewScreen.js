import React from "react";
import { Image, StyleSheet, View } from "react-native";

const ViewScreen = () => {
  return (
    <View style={styles.constainer}>
      <View style={styles.closeIcon}></View>
      <View style={styles.openIcon}></View>

      <Image
        style={styles.img}
        resizeMode={"contain"}
        source={require("../../assets/canon.jpg")}
      />
    </View>
  );
};

export default ViewScreen;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: "black",
  },
  img: {
    height: "100%",
    width: "100%",
  },
  closeIcon: {
    height: 50,
    width: 50,
    backgroundColor: "tomato",
    position: "absolute",
    top: 30,
    left: 30,
  },
  openIcon: {
    height: 50,
    width: 50,
    backgroundColor: "lightblue",
    position: "absolute",
    top: 30,
    right: 30,
  },
});
