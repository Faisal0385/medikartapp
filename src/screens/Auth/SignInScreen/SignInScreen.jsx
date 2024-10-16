import {
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
  ActivityIndicator,
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
import { authToaster, errorToast } from "../../ToastMessage";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  signin_image,
  signin_title,
  singin_sub_title,
} from "../../../utils/string";

const SignInScreen = () => {
  const navigation = useNavigation();
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

    setLoader(true);
    axios
      .post("https://aketbd.com/medikart/api/v1/attendant/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        if (response.data.status == "success") {
          setLoader(false);
          authToaster(
            "success",
            "Login Successful...",
            "Welcome Back!!",
            "bottom"
          );
          setEmail("");
          setPassword("");
          setData(response.data.data);
          navigation.navigate("Bottom Navbar");
        } else if (response.data.status == "error") {
          setLoader(false);
          authToaster(
            "error",
            "Invalid Credential",
            "Pls check your email & password",
            "bottom"
          );
        }
      })
      .catch(function (error) {
        setLoader(false);
        if (error.status == 500) {
          authToaster(
            "error",
            "Somthing went wrong!!",
            "Try agian!!",
            "bottom"
          );
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
          {/* signin image */}
          <AuthImage authImage={signin_image} />
          
          {/* title text & subtitle */}
          <AuthTitle titleText={signin_title} subTitleText={singin_sub_title} />

          <View style={styles.formWrapper}>
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
                maxLength={100}
                value={email}
                placeholder="Email"
                style={styles.input}
                autoCapitalize="none"
                keyboardType="email-address"
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
                maxLength={30}
                value={password}
                style={styles.input}
                placeholder="Password"
                secureTextEntry={secureTextBool}
                onChangeText={(value) => setPassword(value)}
              />
            </View>

            {/* Button */}
            {loader ? (
              <View style={{ marginTop: 10 }}>
                <ActivityIndicator color="blue" />
              </View>
            ) : (
              <AuthButton
                onPressFun={validateFun}
                btnText={"Sing In"}
                icon={<FontAwesomeIcon name="user-circle" size={14} />}
              />
            )}

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
  formWrapper: {
    width: "100%",
    alignItems: "center",
  },
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
