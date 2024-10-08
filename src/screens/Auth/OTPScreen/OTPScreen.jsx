import {
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
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome6";
import AuthImage from "../../../components/AuthImage";
import AuthTitle from "../../../components/AuthTitle";

const OTPScreen = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get("window");

  const [digit1, setDigit1] = useState(0);
  const [digit2, setDigit2] = useState(0);
  const [digit3, setDigit3] = useState(0);
  const [digit4, setDigit4] = useState(0);

  const validateFun = () => {
    if (digit1 === 0 || digit2 === 0 || digit3 === 0 || digit4 === 0) {
      alert("Digits can not be empty!!");
      return;
    }
    navigation.navigate("ResetPassword");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <AuthImage
          imageWidth={width}
          authImage={require("../../../../assets/doctor-illustration.jpg")}
        />
        
        <AuthTitle
          titleText={"Enter Your Verification Code!"}
          subTitleText={""}
        />

        <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
          <TextInput
            style={styles.input}
            placeholder="0"
            keyboardType="numeric"
            value={digit1}
            onChangeText={(value) => setDigit1(value)}
          />
          <TextInput
            style={styles.input}
            placeholder="0"
            keyboardType="numeric"
            value={digit2}
            onChangeText={(value) => setDigit2(value)}
          />
          <TextInput
            style={styles.input}
            placeholder="0"
            keyboardType="numeric"
            value={digit3}
            onChangeText={(value) => setDigit3(value)}
          />
          <TextInput
            style={styles.input}
            placeholder="0"
            keyboardType="numeric"
            value={digit4}
            onChangeText={(value) => setDigit4(value)}
          />
        </View>

        <View
          style={{
            width: width,
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginBottom: 20,
              width: "90%",
            }}
          >
            <TouchableOpacity>
              <Text
                style={{
                  color: "grey",
                  fontSize: 12,
                  fontWeight: "600",
                  textDecorationLine: "underline",
                }}
              >
                Send a new code
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => validateFun()}
            style={{
              width: "90%",
              padding: 10,
              backgroundColor: "#0081F1",
              borderRadius: 5,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
              }}
            >
              <FontAwesomeIcon name="file-circle-check" size={12} /> Verify
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 50,
    margin: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
  },
});
