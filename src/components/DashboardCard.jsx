import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLOR_WHITE } from "../utils/colors";

const DashboardCard = ({ title, amount, bgcolor, fonticons }) => {
  return (
    <View style={styles.cardStyle(bgcolor)}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: COLOR_WHITE }}>{amount}</Text>
        <Text style={{ color: COLOR_WHITE }}> {fonticons}</Text>
      </View>
      <View
        style={{
          height: 2,
          marginVertical: 10,
          backgroundColor: COLOR_WHITE,
        }}
      ></View>
      <Text style={{ color: COLOR_WHITE, fontSize: 16 }}>{title}</Text>
    </View>
  );
};

export default DashboardCard;

const styles = StyleSheet.create({
  cardStyle: (bgcolor) => ({
    backgroundColor: bgcolor,
    marginVertical: 10,
    padding: 30,
    borderRadius: 5,
  }),
});
