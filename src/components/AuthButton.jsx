import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const AuthButton = ({ btnText, icon, onPressFun }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => onPressFun()}
      style={{
        width: "90%",
        padding: 10,
        marginTop:10,
        backgroundColor: "#0081F1",
        borderRadius: 5,
      }}
    >
      <Text style={{ textAlign: "center", color: "white" }}>
        {icon} {btnText}
      </Text>
    </TouchableOpacity>
  );
};

export default AuthButton;

const styles = StyleSheet.create({});
