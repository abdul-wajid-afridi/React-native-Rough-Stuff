import React from "react";
import { Alert, Button, Text, View } from "react-native";

const Alert_Buttons = () => {
  const AlertHAndler = () => {
    Alert.alert("Vaccines", "Don't Use It", [
      { text: "Yes", onPress: (text) => console.log(text) },
      { text: "No", onPress: (text) => console.log(text) },
    ]);
  };
  return (
    <View>
      <Text>This is An ALert And Buttons File</Text>
      <Button onPress={AlertHAndler} title="Click Me" color={"orange"} />
      <Button
        title="AlertBTn"
        color={"dodgerblue"}
        onPress={() => alert("alertBTn")}
      />
    </View>
  );
};

export default Alert_Buttons;
