import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthImage from "../../../components/AuthImage";
import { signin_image } from "../../../utils/string";

const SignUpScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <AuthImage
          imageWidth={width}
          authImage={signin_image}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({});
