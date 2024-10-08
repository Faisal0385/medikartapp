import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AuthImage from "../../../components/AuthImage";
import AuthTitle from "../../../components/AuthTitle";
import AuthButton from "../../../components/AuthButton";
import AuthLinkButton from "../../../components/AuthLinkButton";
import FormInput from "../../../components/FormInput";

const SignInScreen = () => {
  const navigation = useNavigation();
  const { height, width } = Dimensions.get("window");
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>
          <AuthImage
            imageWidth={width}
            authImage={require("../../../../assets/doctor-illustration.jpg")}
          />

          <AuthTitle
            titleText={"Welcome Back"}
            subTitleText={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati et tenetur, animi."
            }
          />

          <View style={styles.formWrapper(width)}>
            {/* Email */}
            <FormInput
              labelText={"Email"}
              labelIcon={
                <FontAwesomeIcon
                  name="envelope"
                  size={16}
                  style={{ color: "#c6c6c6" }}
                />
              }
              secureText={false}
              autoCapital={"none"}
            />

            {/* Password */}
            <FormInput
              labelText={"Password"}
              labelIcon={
                <MaterialIcons
                  name="password"
                  size={16}
                  style={{ color: "#c6c6c6" }}
                />
              }
              secureText={true}
              autoCapital={"yes"}
            />

            {/* Button */}
            <AuthButton
              btnText={"Sing In"}
              icon={<FontAwesomeIcon name="user-circle" size={14} />}
            />

            {/* Link Button */}
            <AuthLinkButton
              linkText={"Forgot Your Password?"}
              navigationRoute={"ForgotPasswordScreen"}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
  formWrapper: (width) => ({
    width: width,
    alignItems: "center",
    paddingVertical: 20,
  }),
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
