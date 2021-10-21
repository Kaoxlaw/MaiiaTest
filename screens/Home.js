import React from "react";
import { View, Button, Linking } from "react-native";
import { dontClick } from "../config";

import { myStyles } from "../styles/style";

const Home = ({ navigation }) => {
  const goToList = () => navigation.navigate("List");

  return (
    <View style={myStyles.homePageStyle}>
      <View style={myStyles.buttonStyleOne}>
        <Button color="#337AFF" title="Go to List" onPress={goToList} />
      </View>
      <View style={myStyles.buttonStyleTwo}>
        <Button
          color="#C733FF"
          title="Do not click here!"
          onPress={() => {
            Linking.openURL(dontClick);
          }}
        />
      </View>
    </View>
  );
};

export default Home;
