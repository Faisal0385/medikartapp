import { StyleSheet, Text } from "react-native";
import React from "react";

const HeadingTitle = ({ title }) => {
  return (
    <Text style={{ fontSize: 24, fontWeight: "600", marginTop: 5 }}>
      {title}
    </Text>
  );
};

export default HeadingTitle;

const styles = StyleSheet.create({});
