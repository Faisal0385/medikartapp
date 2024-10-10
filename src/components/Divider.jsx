import { StyleSheet, View } from "react-native";
import React from "react";

const Divider = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View style={styles.divider}></View>
    </View>
  );
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: "100%",
    marginVertical: 8,
    backgroundColor: 'lightgrey',
  },
});
