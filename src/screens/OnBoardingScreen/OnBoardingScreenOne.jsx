import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React from "react";

import NavigationButton from "./components/NavigationButton";
import TextComponent from "./components/TextComponent";
import IndicatorComponent from "./components/IndicatorComponent";
import {
  ONBOARDING_ONE_HEADING_TEXT,
  ONBOARDING_ONE_PARA_TEXT,
} from "../../utils/string";

const OnBoardingScreenOne = () => {
  const { height, width } = Dimensions.get("window");

  return (
    <SafeAreaView style={[styles.container, { width: width }]}>
      <ScrollView>
        <Image
          source={require("../../../assets/onboarding/doctor-01.jpeg")}
          style={{ width: width, height: height/2 }}
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
          {/* Text container */}
          <TextComponent
            heading={ONBOARDING_ONE_HEADING_TEXT}
            para={ONBOARDING_ONE_PARA_TEXT}
          />

          {/* Indicator container */}
          <IndicatorComponent num={0} />

          {/* Navigation Button */}
          <NavigationButton
            nextRoute="OnboardingTwo"
            skipRoute="SignInScreen"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OnBoardingScreenOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
});
