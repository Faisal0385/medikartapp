import {
  KeyboardAvoidingView,
  Dimensions,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AuthImage from "../../../components/AuthImage";
import AuthTitle from "../../../components/AuthTitle";
import { errorToast, successToast } from "../../ToastMessage";

const ResetPassword = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get("window");

  const [secureTextBool, setSecureTextBool] = useState(true);
  const [resetPassword, setResetPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateFun = () => {
    if (resetPassword.trim() === "") {
      errorToast("New password can not be empty!!");
      return;
    }
    if (confirmPassword.trim() === "") {
      errorToast("Confirm password can not be empty!!");
      return;
    }
    if (resetPassword.trim() !== confirmPassword.trim()) {
      errorToast("Password did not matched!!");
      return;
    }

    successToast("New password set successfully!!");
    navigation.navigate("SignInScreen");
  };

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
            titleText={"Reset Your New Password!!"}
            subTitleText={""}
          />

          <View style={styles.formWrapper(width)}>
            <View
              style={{
                width: "90%",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "600" }}>
                New Password
              </Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="New Password"
              value={resetPassword}
              secureTextEntry={true}
              onChangeText={(value) => setResetPassword(value)}
            />
            <View
              style={{
                width: "90%",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "600" }}>
                Confirm Password
              </Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              value={confirmPassword}
              secureTextEntry={true}
              onChangeText={(value) => setConfirmPassword(value)}
            />
            <TouchableOpacity
              onPress={() => validateFun()}
              style={{
                width: "90%",
                padding: 10,
                backgroundColor: "#0081F1",
                borderRadius: 5,
              }}
            >
              <Text style={{ textAlign: "center", color: "white" }}>
                <MaterialCommunityIcons name="check-decagram" size={14} />{" "}
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
  formWrapper: (width) => ({
    width: width,
    alignItems: "center",
    padding: 5,
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
