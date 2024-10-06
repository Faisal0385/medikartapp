import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TextComponent = ({ heading, para }) => {
  return (
    <View>
      <Text style={{ fontSize: 24, textAlign: "center", paddingTop: 10 }}>
        {heading}
      </Text>
      <Text style={{ fontSize: 16, textAlign: "justify", padding: 5 }}>
        {para}
      </Text>
    </View>
  );
};

export default TextComponent;

const styles = StyleSheet.create({});
