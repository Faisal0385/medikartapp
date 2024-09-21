import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SubHeadingTitle = ({ title }) => {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "600", marginTop: 20 }}>
        {title}
      </Text>
    </View>
  );
};

export default SubHeadingTitle;

const styles = StyleSheet.create({});
