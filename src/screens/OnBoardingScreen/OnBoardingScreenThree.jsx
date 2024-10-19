import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import IndicatorComponent from "./components/IndicatorComponent";
import TextComponent from "./components/TextComponent";
import {
  ONBOARDING_THREE_HEADING_TEXT,
  ONBOARDING_THREE_PARA_TEXT,
} from "../../utils/string";
const OnBoardingScreenThree = () => {
  const { height, width } = Dimensions.get("window");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.container, { width: width }]}>
      <ScrollView>
        <Image
          source={require("../../../assets/onboarding/doctor-02.jpeg")}
          style={{ width: width, height: height / 2 }}
        />
        <View
          style={{
            borderColor: "lightgrey",
            margin: 10,
            borderWidth: 1,
            borderRadius: 10,
            padding: 10,
          }}
        >
          <TextComponent
            heading={ONBOARDING_THREE_HEADING_TEXT}
            para={ONBOARDING_THREE_PARA_TEXT}
          />
          {/* Indicator container */}
          <IndicatorComponent num={2} />

          {/* Navigation Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate("SignInScreen")}
            style={{
              backgroundColor: "#6EBCFF",
              padding: 15,
              borderRadius: 5,
              margin: 10,
            }}
          >
            <Text style={{ fontSize: 16, color: "white", textAlign: "center" }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OnBoardingScreenThree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicator: {
    height: 3.5,
    width: 10,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  bottomIndicator: {
    position: "absolute",
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
});
