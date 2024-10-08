import {
  Dimensions,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import AuthImage from "../../../components/AuthImage";
import AuthTitle from "../../../components/AuthTitle";

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const { height, width } = Dimensions.get("window");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <AuthImage
          imageWidth={width}
          authImage={require("../../../../assets/doctor-illustration.jpg")}
        />

        <AuthTitle titleText={"Forgot Your Password!!"} subTitleText={""} />

        <View
          style={{
            width: width,
            // height: height / 2,
            alignItems: "center",
            // justifyContent: "center",
            // marginVertical: height / 10,
          }}
        >
          {/* <Image
            source={require("../../../../assets/logo/logo.png")}
            style={{ width: 100, height: 100 }}
          /> */}

          {/* <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "600",
                // marginVertical: 30,
                alignItems: "flex-start",
              }}
            >
              Forgot Your Password!!
            </Text>
          </View> */}
          <View
            style={{
              width: "90%",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              <FontAwesomeIcon name="envelope" size={16} /> Your Email
            </Text>
          </View>
          <TextInput style={styles.input} placeholder="Email" />
          <TouchableOpacity
            onPress={() => navigation.navigate("OTP Screen")}
            style={{
              width: "90%",
              padding: 10,
              backgroundColor: "#0081F1",
              borderRadius: 5,
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              <FontAwesome6 name="envelope-circle-check" size={14} /> Send
            </Text>
          </TouchableOpacity>
          <View style={{ marginVertical: 25 }}>
            <Pressable onPress={() => navigation.navigate("SignInScreen")}>
              <Text style={{ color: "grey" }}>
                Have an Account? Singin Here
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 10,
    borderRadius: 5,
    width: "90%",
  },
});
