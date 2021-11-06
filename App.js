import React from "react";
import { Alert, View } from "react-native";
import AppButton from "./Components/LayOuts_3/AppButton";
import Card from "./Components/LayOuts_3/Card";
import Icons_Text from "./Components/LayOuts_3/Icons_Text";
import ViewScreen from "./Components/LayOuts_3/ViewScreen";
import WellCome from "./Components/LayOuts_3/WellCome";

export default function App() {
  return (
    <View style={{ backgroundColor: "lightgrey", flex: 1 }}>
      <Card
        Title="Black Clothes"
        subTitle="$34"
        image={require("./assets/profile.jpg")}
      />
      <Card
        Title="Black Clothes"
        subTitle="$34"
        image={require("./assets/profile.jpg")}
      />
      <Card
        Title="Black Clothes"
        subTitle="$34"
        image={require("./assets/profile.jpg")}
      />
    </View>
  );
}
