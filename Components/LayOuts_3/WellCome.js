import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AppHeader from "../Config/AppHeader";
import AppText from "../Config/AppText";
import Colors from "../Config/Colors";
import AppButton from "./AppButton";

const WellCome = () => {
  return (
    <ImageBackground
      blurRadius={6}
      style={styles.bg}
      source={require("../../assets/perfume.jpg")}
    >
      <View style={styles.logoContainer}>
        <AppHeader>The Lucky Day</AppHeader>
        <Image source={require("../../assets/logo.jpg")} style={styles.img} />
        {/* <Text style={styles.txt}>Buy What Ever You Wants</Text> */}
        <AppText>Buy What Ever You Wants</AppText>
      </View>
      <View style={styles.btnContainer}>
        <AppButton title="Login" color="blue" />
        <AppButton title="REgister" color={Colors.lightGreen} />
      </View>
    </ImageBackground>
  );
};

export default WellCome;
const styles = StyleSheet.create({
  bg: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  login: {
    width: "100%",
    height: 70,
    backgroundColor: "tomato",
  },
  register: {
    width: "100%",
    height: 70,
    backgroundColor: Colors.aqua,
  },
  btnContainer: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 10,
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  logoContainer: {
    position: "absolute",
    top: "15%",
    alignItems: "center",
    alignSelf: "center",
  },
  txt: {
    color: "orange",
    fontWeight: "bold",
    fontFamily: "sans-serif-medium",
    borderWidth: 2,
    borderTopColor: "red",
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 5,
  },
});
