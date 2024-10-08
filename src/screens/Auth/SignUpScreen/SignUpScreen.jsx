import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthImage from "../../../components/AuthImage";

const SignUpScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <AuthImage
          imageWidth={width}
          authImage={require("../../../../assets/doctor-illustration.jpg")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
