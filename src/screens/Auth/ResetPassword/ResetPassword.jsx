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
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AuthImage from "../../../components/AuthImage";
import AuthTitle from "../../../components/AuthTitle";
import { myErrorToast, successToast } from "../../ToastMessage";
import { signin_image } from "../../../utils/string";

const ResetPassword = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get("window");

  const [secureTextBool, setSecureTextBool] = useState(true);
  const [resetPassword, setResetPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateFun = () => {
    if (resetPassword.trim() === "") {
      myErrorToast("New password can not be empty!!", "top");
      return;
    }
    if (confirmPassword.trim() === "") {
      myErrorToast("Confirm password can not be empty!!", "top");
      return;
    }
    if (resetPassword.trim() !== confirmPassword.trim()) {
      myErrorToast("Password did not matched!!", "top");
      return;
    }

    successToast("New password set successfully!!");
    navigation.navigate("SignInScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : ""}
      >
        <ScrollView>
          <AuthImage
            imageWidth={width}
            authImage={signin_image}
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
    paddingTop: Platform.OS === "android" ?  10  : 0,
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
