import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Monthly = () => {
  return (
    <ScrollView>
      {["Jan 24", "Feb 24", "March 24", "April 24", "May 24","June 24"].map((item, key) => {
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
            <Text style={{ color: "black" }}>{item}</Text>
            <Text style={{ color: "black" }}>5000 BDT</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Monthly;

const styles = StyleSheet.create({});