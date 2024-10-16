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
import {
  company_logo,
  company_name,
  SPLASH_COPYRIGHT_TEXT,
} from "../../utils/string";
import { INDICATOR_COLOR } from "../../utils/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { goToDashboardScreen } from "../../navigations/routes";

const SplashScreen = () => {
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        authUser();
      }, 2000);
    }, [])
  );

  // Authentication
  const authUser = async () => {
    const userData = await AsyncStorage.getItem("user-data");
    const userDataObj = JSON.parse(userData);

    if (!userDataObj) {
      navigation.navigate("OnboardingOne");
    } else {
      goToDashboardScreen(navigation);
    }
  };

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <View style={styles.wrapper}>
        <View style={styles.imageWrapper}>
          <Image source={company_logo} style={{ height: 100, width: 100 }} />
        </View>
        <Text style={styles.splashText}>{company_name}</Text>
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
