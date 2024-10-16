import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { themeColors } from "../utils/colors";

const AppBar = ({ appBarText, routeFunc }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.appBarWrapper}>
      <Pressable onPress={() => routeFunc(navigation)}>
        <View style={styles.backIcon}>
          <MaterialIcons
            name="arrow-back-ios-new"
            size={16}
            style={{ color: themeColors.white }}
          />
        </View>
      </Pressable>
      <View style={styles.titleWrapper}>
        <Text style={styles.titleStyle}>{appBarText}</Text>
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  appBarWrapper: {
    flexDirection: "row",
    paddingVertical: 15,
    backgroundColor: "white",
    alignItems: "center",
    paddingRight: 20,
  },
  backIcon: {
    backgroundColor: "lightgrey",
    padding: 8,
    marginLeft: 10,
    borderRadius: 100,
  },
  titleWrapper: { flex: 1, alignItems: "center" },
  titleStyle: { fontSize: 18, fontWeight: "700" },
});
