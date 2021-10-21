import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  TextInput,
  Divider,
} from "react-native";
// import { useSelector, useDispatch } from "react-redux";
// import { getTitles } from "../redux/actions";
import axios from "axios";

import { dataLink } from "../config";
import { myStyles } from "../styles/style";

const List = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState("");

  //Redux
  // const { titles } = useSelector(state => state.titlesReducer);
  // const dispatch = useDispatch();

  // const fetchTitles = () => dispatch(getTitles());

  // useEffect(() => {
  //   fetchTitles();
  // }, []);

  //Fetch api with Axios
  useEffect(() => {
    getPostTitles();
  }, []);

  const getPostTitles = async () => {
    try {
      const response = await axios.get(dataLink);
      const dispatch = response.data;
      setData(dispatch);
      setFilterData(dispatch);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  //Search function
  const searchFilter = (text) => {
    if (text) {
      const newData = data.filter((item) => {
        const itemData = item.title
          ? item.title.toLowerCase()
          : "".toLowerCase();
        const textData = text.toLowerCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(data);
      setSearch(text);
    }
  };

  const renderItem = ({ item }) => (
    <Text style={myStyles.listTitle}>{item.title}</Text>
  );

  const footer = () => {
    return (
      <View style={myStyles.footer}>
        <Text>End of the List</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <TextInput
            style={myStyles.textInput}
            value={search}
            placeholder="Search Here"
            onChangeText={(text) => searchFilter(text)}
          />
          <View style={myStyles.list}>
            <FlatList
              ListFooterComponent={footer}
              data={filterData.sort((a, b) => a.title.localeCompare(b.title))}
              keyExtractor={({ id }) => id.toString()}
              renderItem={renderItem}
              maxToRenderPerBatch={10}
              windowSize={8}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default List;
