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
import NavigationButton from "./components/NavigationButton";
import IndicatorComponent from "./components/IndicatorComponent";
import TextComponent from "./components/TextComponent";
import { ONBOARDING_TWO_HEADING_TEXT, ONBOARDING_TWO_PARA_TEXT } from "../../utils/string";

const OnBoardingScreenTwo = () => {
  const { height, width } = Dimensions.get("window");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.container, { width: width }]}>
      <ScrollView>
        <Image
          source={require("../../../assets/onboarding/doctor-05.jpeg")}
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
            heading={ONBOARDING_TWO_HEADING_TEXT}
            para={ONBOARDING_TWO_PARA_TEXT}
          />

          {/* Indicator container */}
          <IndicatorComponent num={1} />
          {/* Navigation Button */}
          <NavigationButton
            nextRoute="OnboardingThree"
            skipRoute="SignInScreen"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OnBoardingScreenTwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomIndicator: {
    position: "absolute",
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
  },
});
