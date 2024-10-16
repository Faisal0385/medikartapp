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
import { SPLASH_COPYRIGHT_TEXT } from "../../utils/string";
import { INDICATOR_COLOR } from "../../utils/colors";

const SplashScreen = () => {
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        navigation.navigate("OnboardingOne");
      }, 2000);
    }, [])
  );

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <View style={styles.wrapper}>
        <View style={styles.imageWrapper}>
          <Image
            source={require("../../../assets/logo/logo.png")}
            style={{ height: 100, width: 100 }}
          />
        </View>
        <Text style={styles.splashText}>Zyona Laser & Skincare</Text>
      </View>
      <View style={styles.copyrightWrapper}>
        <ActivityIndicator color={INDICATOR_COLOR} />
        <Text style={styles.copyrightTextStyle}>{SPLASH_COPYRIGHT_TEXT}</Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: { flex: 1, justifyContent: "flex-end" },
  imageWrapper: { alignItems: "center", marginTop: 5 },
  splashText: { fontSize: 20, paddingTop: 20, fontWeight: "600" },
  copyrightTextStyle: {
    fontStyle: "italic",
    fontSize: 12,
    paddingTop: 10,
  },
  copyrightWrapper: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
  },
});
