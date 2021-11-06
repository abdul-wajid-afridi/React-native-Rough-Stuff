import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const Images_TouchAbles = () => {
  return (
    <View>
      <TouchableHighlight>
        <Text
          style={{ backgroundColor: "blue", color: "orange", marginBottom: 10 }}
        >
          This is The Text
        </Text>
      </TouchableHighlight>
      <TouchableOpacity onPress={() => console.log("You clicked the Text")}>
        <Text style={{ backgroundColor: "dodgerblue" }}>
          This file Describes the basics of the Images and The TouchAbles
        </Text>
      </TouchableOpacity>
      <TouchableWithoutFeedback
        onPress={() => console.log("WithOut FeedBack clicked the Text")}
      >
        <Text style={{ backgroundColor: "dodgerblue" }}>
          This file Describes the basics of the Images and The TouchAbles
        </Text>
      </TouchableWithoutFeedback>
      <Image
        source={require("../../assets/favicon.png")}
        height={300}
        width={400}
        blurRadius={0.2}
      />
    </View>
  );
};

export default Images_TouchAbles;
const styles = StyleSheet.create({
  img: {
    height: 500,
    width: 600,
    borderRadius: 25,
    borderColor: "black",
  },
});
