import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { COLOR_WHITE } from "../../../utils/colors";
import { useNavigation } from "@react-navigation/native";

const PaymentComponent = ({ data }) => {
  const navigation = useNavigation();
  const [loader, setLoader] = useState(false);

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
          <Text style={{ fontWeight: "700" }}>Serial No: </Text>{" "}
          {data.serial_no}
        </Text>
        <Text
          style={{
            backgroundColor: "#eae8e8",
            padding: 10,
            marginVertical: 5,
          }}
        >
          <Text style={{ fontWeight: "700" }}>Visit ID: </Text> {data.visit_id}
        </Text>
        <Text
          style={{
            backgroundColor: "#eae8e8",
            padding: 10,
            marginVertical: 5,
          }}
        >
          <Text style={{ fontWeight: "700" }}>Name: {data.full_name}</Text>
        </Text>

        <Text
          style={{
            backgroundColor: "#eae8e8",
            padding: 10,
            marginVertical: 5,
          }}
        >
          <Text style={{ fontWeight: "700" }}>Phone: </Text>
          {data.mobile}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Receipt", { data: data })}
        >
          <Text style={{ color: COLOR_WHITE }}>Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentComponent;

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#eae8e8",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 5,
    margin: 14,
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
    backgroundColor: "#FA4D24",
    padding: 10,
    borderRadius: 5,
    marginVertical: 3,
  },
});
