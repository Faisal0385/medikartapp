import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const OnBoardingScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Bottom Navbar");
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text>OnBoarding Screen</Text>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 20,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
