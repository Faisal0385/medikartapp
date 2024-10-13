import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const NavigationButton = ({ nextRoute, skipRoute }) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate(nextRoute)}
        style={{
          backgroundColor: "#6EBCFF",
          padding: 15,
          borderRadius: 5,
          margin: 10,
        }}
      >
        <Text style={{ fontSize: 16, color: "white", textAlign: "center" }}>
          Next
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate(skipRoute)}
        style={{
          borderRadius: 5,
          margin: 10,
        }}
      >
        <Text style={{ fontSize: 14, color: "grey", textAlign: "center" }}>
          Skip
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavigationButton;

const styles = StyleSheet.create({});
