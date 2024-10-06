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

const OnBoardingScreen = () => {
  const { height, width } = Dimensions.get("window");
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.container, { width: width }]}>
      <ScrollView>
        <Image
          source={require("../../../assets/onboarding/doctor-01.jpg")}
          style={{ width: width, height: height / 2 }}
        />
        <View
          style={{
            borderColor: "lightgrey",
            margin: 20,
            borderWidth: 1,
            borderRadius: 10,
            padding: 20,
          }}
        >
          <Text style={{ fontSize: 24, textAlign: "center", paddingTop: 10 }}>
            Thousands of Specialists
          </Text>
          <Text style={{ fontSize: 16, textAlign: "justify", padding: 5 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe amet
            quo natus veniam optio rem.
          </Text>
          {/* Indicator container */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            {/* Render indicator */}
            {[1, 1, 1].map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  index == 0 && {
                    backgroundColor: "blue",
                    width: 25,
                  },
                ]}
              />
            ))}
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("OnBoardingTwo")}
            style={{
              backgroundColor: "#6EBCFF",
              padding: 20,
              borderRadius: 5,
              margin: 10,
            }}
          >
            <Text style={{ fontSize: 16, color: "white", textAlign: "center" }}>
              Next
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Bottom Navbar")}
            style={{
              borderRadius: 5,
              margin: 10,
            }}
          >
            <Text style={{ fontSize: 14, color: "grey", textAlign: "center" }}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;

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
