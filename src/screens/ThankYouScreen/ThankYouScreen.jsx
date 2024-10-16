import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { company_logo } from "../../utils/string";
import { goToDashboardScreen } from "../../navigations/routes";
import { themeColors } from "../../utils/colors";

const ThankYouScreen = () => {
  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        goToDashboardScreen(navigation);
      }, 2000);
    }, [])
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={company_logo} style={styles.imageStyle} />
      </View>
      <Text style={styles.textStyle}>Thank You</Text>
      <ActivityIndicator color={themeColors.primary} size={"small"} />
    </SafeAreaView>
  );
};

export default ThankYouScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
  },
  imageWrapper: { alignItems: "center", marginTop: 5 },
  imageStyle: { height: 80, width: 80 },
  textStyle: { fontSize: 40, color: themeColors.orangeRed, marginVertical: 20 },
});
