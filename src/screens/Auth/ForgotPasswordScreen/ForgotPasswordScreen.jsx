import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import AuthImage from "../../../components/AuthImage";
import AuthTitle from "../../../components/AuthTitle";
import { errorToast } from "../../ToastMessage";
import { signin_image } from "../../../utils/string";


const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get("window");
  const [email, setEmail] = useState("");

  const validateFun = () => {
    if (email.trim() === "") {
      errorToast("Email can not be empty!!");
      return;
    }

    navigation.navigate("OTP Screen");
  };
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>
          <AuthImage
            imageWidth={width}
            authImage={signin_image}
          />

          <AuthTitle titleText={"Forgot Your Password!!"} subTitleText={""} />
          <View style={styles.formWrapper(width)}>
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

            <TouchableOpacity
              onPress={(value) => validateFun(value)}
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
                <Text style={{ color: "grey", textDecorationLine:"underline" }}>
                  Have an Account? Sing In Here
                </Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
  formWrapper: (width) => ({
    width: width,
    alignItems: "center",
    padding: 5,
  }),
  inputWrapper: { width: "90%", marginVertical: 10 },
  inputLabel: { fontWeight: "700" },
  input: {
    marginTop: 10,
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
