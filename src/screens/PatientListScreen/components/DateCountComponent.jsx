import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DateCountComponent = ({ date, count }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Date: {date}</Text>
      <Text style={styles.textStyle}>Count({count})</Text>
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
  textStyle: { fontSize: 16, fontWeight: "600" },
});
