import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLOR_WHITE } from "../utils/colors";

const Search = ({goto}) => {
  return (
    <View style={styles.searchStyle}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          placeholderTextColor={COLOR_WHITE}
          style={styles.searchInputStyle}
          placeholder="Search Here..."
        />
        <TouchableOpacity style={styles.searchBtn} onPress={goto}>
          <Text style={{ color: COLOR_WHITE }}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchStyle: {
    backgroundColor: "#65ad53",
    marginVertical: 10,
    padding: 15,
    borderRadius: 5,
  },
  searchInputStyle: {
    flex: 1,
    height: 40,
    marginVertical: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: COLOR_WHITE,
  },
  searchBtn: {
    backgroundColor: "#246015",
    marginHorizontal: 5,
    padding: 12,
    borderRadius: 5,
  },
});
