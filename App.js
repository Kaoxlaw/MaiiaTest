import React from "react";
import { View } from "react-native";

import Navigation from "./screens/Navigation";
import { myStyles } from "./styles/style";

const App = () => {
  return (
    <View style={myStyles.container}>
      <Navigation />
    </View>
  );
};

export default App;
