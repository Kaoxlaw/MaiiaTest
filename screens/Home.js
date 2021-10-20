import React from "react";
import { Text, View, Button } from "react-native";

import { myStyles } from "../styles/style";

const Home = ({ navigation }) => {
  const goToList = () => navigation.navigate("List");

  return (
    <View style={myStyles.homePageStyle}>
      <Button
        title="Go to List"
        onPress={goToList}
      />
    </View>
  );
};

export default Home;
