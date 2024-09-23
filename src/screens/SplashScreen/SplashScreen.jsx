import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Onboarding");
    }, 2000);
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ alignItems: "center", marginTop: 5 }}>
        <Image
          source={require("../../../assets/icon.png")}
          style={{ height: 80, width: 80 }}
        />
      </View>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
