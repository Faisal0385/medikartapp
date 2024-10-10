import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PaymentCard = ({ id, name, fee, status, time }) => {
  return (
    <View
      key={id}
      style={{
        backgroundColor: "#17B48C",
        marginVertical: 15,
        padding: 30,
        borderRadius: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "white" }}>{name}</Text>
        <Text style={{ color: "white" }}>{fee} BDT</Text>
      </View>
      <View
        style={{
          height: 2,
          marginVertical: 10,
          backgroundColor: "white",
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "white" }}>Status: {status}</Text>
        <Text style={{ color: "white" }}>TIme: {time}</Text>
      </View>
    </View>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({});
