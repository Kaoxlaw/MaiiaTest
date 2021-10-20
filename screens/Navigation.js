import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Home";
import List from "./List";
import { myStyles } from "../styles/style";
import { View } from "react-native";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (


    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: "Home Page" }}/>
        <Stack.Screen name="List" component={List} options={{ title: "List Page"}}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
};

export default Navigation;
