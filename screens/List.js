import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { myStyles } from "../styles/style";

const dataLink = "https://jsonplaceholder.typicode.com/posts";

const List = () => {
  const [isLoading, setLoading] = useState(true);
  const [filterData, setFilterData] = useState([]);
  const [data, setData] = useState([]);

  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(dataLink)
      .then((response) => response.json())
      .then((responseJson) => {
        setFilterData(responseJson);
        setData(responseJson);})
      .catch((error) => alert(error))
      .finally(() => setLoading(false));
  }, []);

  const renderItem = ({ item }) => <Text style={myStyles.listTitle}>{item.title}</Text>;

  const searchFilter = (text) => {
    if (text) {
      const newData = data.filter((item) => {
        const itemData = item.title ? item.title.toLowerCase() : "".toLowerCase();
        const textData = text.toLowerCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(data);
      setSearch(text);
    }
  }

  return (
    <SafeAreaView>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <TextInput 
          style={myStyles.textInput}
          value= {search}
          placeholder="Search Here"
          onChangeText={(text) => searchFilter(text)}
          />
          <FlatList
            data={filterData.sort((a, b) => a.title.localeCompare(b.title))}
            keyExtractor={({ id }) => id.toString()}
            renderItem={renderItem}
            maxToRenderPerBatch={10}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default List;
