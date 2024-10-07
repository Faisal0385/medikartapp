import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const ThankYouScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Dashboard");
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center", marginTop: 5 }}>
        <Image
          source={require("../../../assets/logo/logo.png")}
          style={{ height: 80, width: 80 }}
        />
      </View>
      <Text style={{ fontSize: 40, color: "#FA4D24", marginVertical: 20 }}>
        Thank You
      </Text>
    </SafeAreaView>
  );
};

export default ThankYouScreen;

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
