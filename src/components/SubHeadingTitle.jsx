import { StyleSheet, Text } from "react-native";
import React from "react";

const SubHeadingTitle = ({ title }) => {
  return (
    <Text style={{ fontSize: 24, fontWeight: "600", marginTop: 20, textAlign:"center" }}>
      {title}
    </Text>
  );
};

export default SubHeadingTitle;

const styles = StyleSheet.create({});
