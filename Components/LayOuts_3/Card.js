import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Platform, StyleSheet, View } from "react-native";
import AppText from "../Config/AppText";
import Colors from "../Config/Colors";

const Card = ({ Title, subTitle, image }) => {
  return (
    <View style={styles.card_img}>
      <Image source={image} style={styles.img} />
      <View style={styles.infoCont}>
        <AppText style={styles.info}>{Title}</AppText>
        <AppText style={styles.price}>{subTitle}</AppText>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card_img: {
    marginTop: Platform.OS === "android" ? 20 : 0,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: "hidden",
    margin: 10,
    backgroundColor: Colors.white,
    elevation: 30,
  },
  infoCont: {
    padding: 6,
  },
  img: {
    width: "100%",
    height: 250,
  },
  info: {
    fontWeight: "bold",
    color: Colors.black,
    marginVertical: 6,
  },
  price: {
    color: "orange",
  },
});
