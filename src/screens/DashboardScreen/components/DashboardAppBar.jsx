import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { goToProfileScreen } from "../../../navigations/routes";
import { useNavigation } from "@react-navigation/native";

const DashboardAppBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dashboardAppBarWrapper}>
      <TouchableOpacity>
        <Image
          source={require("../../../../assets/qrcode.png")}
          style={styles.imageStyle}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => goToProfileScreen(navigation)}>
        <Image
          source={require("../../../../assets/logo/logo.png")}
          style={styles.imageStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DashboardAppBar;

const styles = StyleSheet.create({
  dashboardAppBarWrapper: {
    padding: 10,
    flexDirection: "row",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    borderBottomColor: "lightgrey",
  },
  imageStyle: { width: 25, height: 25 },
});
