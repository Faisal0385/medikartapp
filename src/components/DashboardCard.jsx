import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DashboardCard = () => {
  return (
    <View style={styles.cardStyle}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: "white" }}>0</Text>
        <Text style={{ color: "white" }}>Person</Text>
      </View>
      <View
        style={{ height: 2, marginVertical: 10, backgroundColor: "white" }}
      ></View>
      <Text style={{ color: "white" }}>Today's Income</Text>
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
