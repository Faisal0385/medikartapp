import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { themeColors } from "../../../utils/colors";

const DateCountComponent = ({ date }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Date: {date}</Text>
    </View>
  );
};

export default DateCountComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  textStyle: {
    fontSize: 16,
    fontStyle: "italic",
    color: themeColors.grey,
    fontWeight: "600",
  },
});
