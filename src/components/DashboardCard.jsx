import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLOR_WHITE } from "../utils/colors";

const DashboardCard = () => {
  return (
    <View style={styles.cardStyle}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: COLOR_WHITE }}>0</Text>
        <Text style={{ color: COLOR_WHITE }}>Person</Text>
      </View>
      <View
        style={{ height: 2, marginVertical: 10, backgroundColor: COLOR_WHITE }}
      ></View>
      <Text style={{ color: COLOR_WHITE }}>Today's Income</Text>
    </View>
  );
};

export default DashboardCard;

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: "#17B48C",
    marginVertical: 20,
    padding: 30,
    borderRadius: 5,
  },
});
