import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLOR_WHITE } from "../utils/colors";

const DashboardCard = ({ title, amount, bgcolor, fonticons, count }) => {
  return (
    <View style={styles.cardStyle(bgcolor)}>
      <View style={{ flexDirection: "row", justifyContent:"center", alignItems:"center"}}>
        <Text style={{ color: COLOR_WHITE, fontWeight: "bold" }}>
          {" "}
          {fonticons}
        </Text>
        <Text style={{ color: COLOR_WHITE, fontWeight: "bold", fontSize:14 ,marginHorizontal:5 }}>
          {count} Person/s
        </Text>
      </View>
      <View
        style={{
          height: 2,
          marginVertical: 10,
          backgroundColor: COLOR_WHITE,
        }}
      ></View>
      <Text style={{ color: COLOR_WHITE, fontSize: 16, textAlign:"center" }}>
        {title} - {amount} BDT
      </Text>
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
