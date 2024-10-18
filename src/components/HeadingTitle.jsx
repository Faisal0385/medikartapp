import { StyleSheet, Text } from "react-native";
import React from "react";

const HeadingTitle = ({ title, size }) => {
  return (
    <Text style={{ fontFamily:"montBold", fontSize: size, fontWeight: "600", marginTop: 5 }}>
      {title}
    </Text>
  );
};

export default HeadingTitle;

const styles = StyleSheet.create({});
