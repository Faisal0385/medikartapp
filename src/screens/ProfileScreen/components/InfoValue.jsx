import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLOR_WHITE } from "../../../utils/colors";

const InfoDisplay = ({ infoValue, fontIcon }) => {
  return (
    <View>
      <View style={styles.infoWrapper}>
        <Text style={styles.fontIconStyle}>{fontIcon}</Text>
        <Text style={styles.infoValueStyle}>{infoValue}</Text>
      </View>
      <View style={styles.dividerStyle}></View>
    </View>
  );
};

export default InfoDisplay;

const styles = StyleSheet.create({
  infoWrapper: {
    flexDirection: "row",
  },
  fontIconStyle: { color: COLOR_WHITE, fontWeight: "bold" },
  infoValueStyle: {
    fontFamily: "montSemiBold",
    color: COLOR_WHITE,
    fontWeight: "bold",
    fontSize: 14,
    marginHorizontal: 5,
  },
  dividerStyle: {
    height: 2,
    marginVertical: 10,
    backgroundColor: COLOR_WHITE,
  },
});
