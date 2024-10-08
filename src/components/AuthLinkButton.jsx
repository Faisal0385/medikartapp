import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const AuthLinkButton = ({linkText, navigationRoute}) => {
  const navigation = useNavigation();
  return (
    <View style={{ marginVertical: 20 }}>
      <Pressable onPress={() => navigation.navigate(navigationRoute)}>
        <Text style={{ color: "grey" }}>{linkText}</Text>
      </Pressable>
    </View>
  );
};

export default AuthLinkButton;

const styles = StyleSheet.create({});
