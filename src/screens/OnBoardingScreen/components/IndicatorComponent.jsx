import { StyleSheet, Text, View } from "react-native";
import React from "react";

const IndicatorComponent = ({ num }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 20,
      }}
    >
      {/* Render indicator */}
      {[1, 1, 1].map((_, index) => (
        <View
          key={index}
          style={[
            styles.indicator,
            index == num && {
              backgroundColor: "blue",
              width: 25,
            },
          ]}
        />
      ))}
    </View>
  );
};

export default IndicatorComponent;

const styles = StyleSheet.create({
  indicator: {
    height: 3.5,
    width: 10,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 2,
  },
});
