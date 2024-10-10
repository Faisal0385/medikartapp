import { StyleSheet, View } from "react-native";
import React from "react";
import { COLOR_BLACK } from "../../../utils/colors";

const Divider = () => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <View style={styles.dividerStyle}></View>
    </View>
  );
};

export default Divider;

const styles = StyleSheet.create({
  dividerStyle: {
    height: 2,
    width: "30%",
    marginVertical: 10,
    backgroundColor: COLOR_BLACK,
  },
});
