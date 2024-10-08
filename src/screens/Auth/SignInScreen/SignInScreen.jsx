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

const SignInScreen = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get("window");
  const [secureTextBool, setSecureTextBool] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateFun = () => {
    if (email.trim() === "") {
      alert("Email can not be empty!!");
      return;
    }
    if (password.trim() === "") {
      alert("Password can not be empty!!");
      return;
    }

    navigation.navigate("Bottom Navbar")
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
