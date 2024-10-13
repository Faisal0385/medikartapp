import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AuthTitle = ({ titleText, subTitleText }) => {
  return (
    <View>
      <View>
        <Text style={styles.titleTextStyle}>{titleText}</Text>
      </View>
      {subTitleText != "" ? (
        <View>
          <Text style={styles.subTitleTextStyle}>{subTitleText}</Text>
        </View>
      ) : (
        ""
      )}
    </View>
  );
};

export default AuthTitle;

const styles = StyleSheet.create({
  titleTextStyle: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginVertical:10
  },
  subTitleTextStyle: {
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
    color: "grey",
    marginBottom: 5,
    marginHorizontal:10
  },
});
