import { Dimensions, Image, View } from "react-native";
import React from "react";

const AuthImage = ({authImage }) => {
  const { height, width } = Dimensions.get("window");
  return (
    <View>
      <Image
        source={authImage}
        style={{width: width, height: height/2.5}}
        resizeMode="cover"
        resizeMethod="resize"
      />
    </View>
  );
};

export default AuthImage;