import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLOR_WHITE } from "../../../utils/colors";
import { useNavigation } from "@react-navigation/native";

const HistoryCard = ({ id, vid, date, name, phone, routeFun }) => {
  const navigation = useNavigation()
  return (
    <View style={[styles.card, styles.shadowProp]}>
      <View style={{ padding: 10 }}>
        <Text
          style={{
            backgroundColor: "#eae8e8",
            padding: 10,
            marginVertical: 5,
          }}
        >
          <Text style={{ fontWeight: "700" }}>Visit Id </Text> {vid}
        </Text>
        <Text
          style={{
            backgroundColor: "#eae8e8",
            padding: 10,
            marginVertical: 5,
          }}
        >
          <Text style={{ fontWeight: "700" }}>Date </Text> {date}
        </Text>

        <Text
          style={{
            backgroundColor: "#eae8e8",
            padding: 10,
            marginVertical: 5,
          }}
        >
          <Text style={{ fontWeight: "700" }}>Name: </Text> {name}
        </Text>

        <Text
          style={{
            backgroundColor: "#eae8e8",
            padding: 10,
            marginVertical: 5,
          }}
        >
          <Text style={{ fontWeight: "700" }}>Phone: </Text> {phone}
        </Text>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Rebooking", {id:id})}>
            <Text style={{ color: COLOR_WHITE }}>Re-Appointment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HistoryCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 5,
    margin: 10,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  button: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#17B48C",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
});
