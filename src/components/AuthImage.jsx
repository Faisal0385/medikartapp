import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const AuthImage = ({ imageWidth, authImage }) => {
  return (
    <View>
      <Image
        source={authImage}
        style={styles.imageStyle(imageWidth)}
        resizeMode="contain"
        resizeMethod="resize"
      />
    </View>
  );
};

export default AuthImage;

const styles = StyleSheet.create({
    imageStyle:(imageWidth)=>({width: imageWidth, height: 300})
});
