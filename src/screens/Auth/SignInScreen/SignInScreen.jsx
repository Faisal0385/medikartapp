import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AuthImage from "../../../components/AuthImage";
import AuthTitle from "../../../components/AuthTitle";
import AuthButton from "../../../components/AuthButton";
import AuthLinkButton from "../../../components/AuthLinkButton";
import { errorToast, successToast } from "../../ToastMessage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import axios from "axios";

const SignInScreen = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get("window");
  const [secureTextBool, setSecureTextBool] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const validateFun = () => {
    if (email.trim() === "") {
      errorToast("Email can not be empty!!");
      return;
    }
    if (password.trim() === "") {
      errorToast("Password can not be empty!!");
      return;
    }

    axios
      .post("https://aketbd.com/medikart/api/v1/attendant/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        setLoader(false);

        if (response.data.status == "success") {
          Toast.show({
            type: "success",
            text1: "Login Succesfull",
            position: "top",
            visibilityTime: 2000,
            topOffset: 60,
          });
          setEmail("");
          setPassword("");
          setData(response.data.data);
          navigation.navigate("Bottom Navbar");
        } else if (response.data.status == "error") {
          Toast.show({
            type: "error",
            text1: "Invalid Credential",
            text2: "Pls check your email & password",
            position: "top",
            visibilityTime: 2000,
            topOffset: 60,
          });
        }
      })
      .catch(function (error) {
        setLoader(false);
        if (error.status == 500) {
          Toast.show({
            type: "error",
            text1: "Somthing went wrong!!",
            text2: "Try agian!!",
            position: "top",
            visibilityTime: 2000,
            topOffset: 60,
          });
        }
      });

    const setData = async (userData) => {
      await AsyncStorage.setItem("user-data", JSON.stringify(userData));
    };
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>
          <AuthImage
            authImage={require("../../../../assets/doctor-illustration.jpg")}
          />

          <AuthTitle
            titleText={"Welcome Back"}
            subTitleText={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati et tenetur, animi."
            }
          />

          <View style={styles.formWrapper(width)}>
            {/* Email Input*/}
            <View style={styles.inputWrapper}>
              <Text style={styles.inputLabel}>
                <FontAwesomeIcon
                  name="envelope"
                  size={16}
                  style={{ color: "#c6c6c6" }}
                />{" "}
                Email
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={(value) => setEmail(value)}
              />
            </View>

            {/* Password Input*/}
            <View style={styles.inputWrapper}>
              <View style={styles.labelWrapper}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MaterialIcons
                    name="password"
                    size={16}
                    style={{ color: "#c6c6c6" }}
                  />
                  <Text style={{ fontWeight: "700" }}> Password</Text>
                </View>

                <TouchableOpacity
                  onPress={() => setSecureTextBool(!secureTextBool)}
                >
                  <Text>
                    {secureTextBool ? (
                      <MaterialCommunityIcons
                        name="eye-off"
                        size={22}
                        style={{ color: "#b92b38" }}
                      />
                    ) : (
                      <MaterialCommunityIcons
                        name="eye"
                        size={22}
                        style={{ color: "#b92b38" }}
                      />
                    )}
                  </Text>
                </TouchableOpacity>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={secureTextBool}
                value={password}
                onChangeText={(value) => setPassword(value)}
              />
            </View>

            {/* Button */}
            <AuthButton
              onPressFun={validateFun}
              btnText={"Sing In"}
              icon={<FontAwesomeIcon name="user-circle" size={14} />}
            />

            {/* Link Button */}
            {/* <AuthLinkButton
              linkText={"Forgot Your Password?"}
              navigationRoute={"ForgotPasswordScreen"}
            /> */}
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
  },
  formWrapper: (width) => ({
    width: width,
    alignItems: "center",
  }),
  inputWrapper: { width: "90%", marginVertical: 10 },
  inputLabel: { fontWeight: "700" },
  input: {
    marginTop: 5,
    height: 40,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 5,
    padding: 10,
  },
  labelWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "700",
  },
});
