import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { myStyles } from "../styles/style";

const dataLink = "https://jsonplaceholder.typicode.com/posts";

const List = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(dataLink)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => alert(error))
      .finally(() => setLoading(false));
  }, []);

  _renderItem = ({ item }) => <Text style={myStyles.listTitle}>{item.title}</Text>;

  return (
    <SafeAreaView>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <FlatList
            data={data.sort((a, b) => a.title.localeCompare(b.title))}
            keyExtractor={({ id }) => id.toString()}
            renderItem={_renderItem}
            maxToRenderPerBatch={10}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default List;
