import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Daily = () => {
  return (
    <ScrollView>
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(( item, key ) => {
        return (
          <TouchableOpacity
            key={key + 1}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 10,
              backgroundColor: "lightblue",
              padding: 10,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "black" }}>28 OCT 2024</Text>
            <Text style={{ color: "black" }}>5000 BDT</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Daily;

const styles = StyleSheet.create({});
