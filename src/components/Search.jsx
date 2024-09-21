import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Search = () => {
  return (
    <View style={styles.searchStyle}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          placeholderTextColor="white"
          style={styles.searchInputStyle}
          placeholder="Search Here..."
        />
        <TouchableOpacity
          style={{
            backgroundColor: "teal",
            marginHorizontal: 5,
            padding: 12,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchStyle: {
    backgroundColor: "#17B48C",
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
    borderColor: "white",
  },
});
