import {
  Dimensions,
  Image,
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

const SignInScreen = () => {
  const navigation = useNavigation();
  const { height, width } = Dimensions.get("window");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            width: width,
            height: height / 2,
            alignItems: "center",
            justifyContent: "center",
            marginVertical: height / 10,
          }}
        >
          <Image
            source={require("../../../../assets/logo/logo.png")}
            style={{ width: 100, height: 100 }}
          />

          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "600",
                marginVertical: 30,
                alignItems: "flex-start",
              }}
            >
              Welcome Back
            </Text>
          </View>
          <View
            style={{
              width: "90%",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600" }}>Email</Text>
          </View>
          <TextInput style={styles.input} placeholder="Email" />

          <View
            style={{
              width: "90%",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600" }}>Password</Text>
          </View>
          <TextInput style={styles.input} placeholder="Password" />
          <TouchableOpacity
          onPress={() => navigation.navigate("Bottom Navbar")}
            style={{
              width: "90%",
              padding: 10,
              backgroundColor: "#0081F1",
              borderRadius: 5,
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>Submit</Text>
          </TouchableOpacity>
          <View style={{ marginVertical: 20 }}>
            <Pressable
              onPress={() => navigation.navigate("ForgotPasswordScreen")}
            >
              <Text style={{ color: "grey" }}>Forgot Password?</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
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
