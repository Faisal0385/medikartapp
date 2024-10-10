import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const AppBar = ({ appBarText, routeFunc }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        paddingVertical: 15,
        backgroundColor: "white",
        alignItems: "center",
        paddingRight:20
      }}
    >
      <Pressable onPress={() => routeFunc(navigation)}>
        <View
          style={{
            backgroundColor: "lightgrey",
            padding: 8,
            marginLeft: 10,
            borderRadius: 100,
          }}
        >
          <MaterialIcons
            name="arrow-back-ios-new"
            size={16}
            style={{ color: "white" }}
          />
        </View>
      </Pressable>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>{appBarText}</Text>
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({});
