import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { COLOR_WHITE } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { ToastMsg } from "../screens/ToastMessage";

const Search = ({ asstId }) => {
  const navigation = useNavigation();
  const [keywordValue, setKeywordValue] = useState("");
  const [keywordText, setKeywordText] = useState("");

  const validate = (id) => {    
    if (keywordText.trim() == "") {
      ToastMsg("error", "Search field can not be empty!!", "top");
      return;
    }
    setKeywordValue(keywordText)
    setKeywordText("")
    navigation.navigate("PatientHistory", { asstId: id, keywordText: keywordValue });
    return
  };

  return (
    <View style={styles.searchStyle}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          placeholderTextColor={COLOR_WHITE}
          style={styles.searchInputStyle}
          placeholder="Search Here..."
          value={keywordText}
          onChangeText={(value) => setKeywordText(value)}
        />
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => validate(asstId)}
        >
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
