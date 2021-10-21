import { StyleSheet } from "react-native";

export const myStyles = StyleSheet.create({
  // App.js
  container: {
    flex: 1,
  },

  //List.js
  list: {
    paddingVertical: 10,
    paddingTop: 5,
    paddingBottom: "50%",
  },
  listTitle: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    display: "flex",
    backgroundColor: "#ddd",
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 20,
    margin: 5,
    borderColor: "lightgray",
    backgroundColor: "white",
  },
  footer: {
    flex: 1,
    alignItems: "center",
  },

  //Home.js
  homePageStyle: {
    flex: 1,
    alignItems: "center",
  },
  buttonStyleOne: {
    marginTop: "30%",
  },
  buttonStyleTwo: {
    marginTop: "70%",
  },
});
