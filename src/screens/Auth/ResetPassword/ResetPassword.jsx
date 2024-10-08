import {
  Dimensions,
  Image,
  Platform,
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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AuthImage from "../../../components/AuthImage";

const ResetPassword = () => {
  const navigation = useNavigation();
  const { height, width } = Dimensions.get("window");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <AuthImage imageWidth={width} authImage={require("../../../../assets/doctor-illustration.jpg")}/>

        <View
          style={{
            width: width,
            // height: height / 2,
            alignItems: "center",
            justifyContent: "center",
            // marginVertical: height / 10,
          }}
        >
          {/* <Image
            source={require("../../../../assets/logo/logo.png")}
            style={{ width: 100, height: 100 }}
          /> */}

          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "600",
                marginVertical: 30,
                alignItems: "flex-start",
              }}
            >
              Reset Your New Password!!
            </Text>
          </View>
          <View
            style={{
              width: "90%",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              Reset Password
            </Text>
          </View>
          <TextInput style={styles.input} placeholder="Reset Password" />
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
          <TextInput style={styles.input} placeholder="Confirm Password" />
          <TouchableOpacity
            onPress={() => navigation.navigate("SignInScreen")}
            style={{
              width: "90%",
              padding: 10,
              backgroundColor: "#0081F1",
              borderRadius: 5,
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              <MaterialCommunityIcons name="check-decagram" size={14} /> Submit
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
