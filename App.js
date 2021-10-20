import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { myStyles } from "./styles/style";

const dataLink = "https://jsonplaceholder.typicode.com/posts";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(dataLink)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => alert(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView style={myStyles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <FlatList
            data={data.sort((a, b) => a.title.localeCompare(b.title))}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <Text style={myStyles.title}>{item.id} {item.title}</Text>
            )}
            maxToRenderPerBatch={10}
            initialNumToRender={10}
            windowSize={9}
          />
        </View>
      )}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App;
