import React from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import Navigation from "./screens/Navigation";
import { myStyles } from "./styles/style";

const App = () => {
  return (
    <View style={myStyles.container}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </View>
  );
};

export default App;
