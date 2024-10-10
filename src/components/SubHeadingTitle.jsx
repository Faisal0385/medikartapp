import { StyleSheet, Text } from "react-native";
import React from "react";

const SubHeadingTitle = ({ title }) => {
  return (
    <Text style={{ fontSize: 20, fontWeight: "600", marginTop: 20 }}>
      {title}
    </Text>
  );
};

export default SubHeadingTitle;

const styles = StyleSheet.create({});
