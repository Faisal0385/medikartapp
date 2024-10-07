import {
  Dimensions,
  Image,
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

const OTPScreen = () => {
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
            marginVertical: height / 14,
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
                marginVertical: 10,
                alignItems: "flex-start",
              }}
            >
              Enter Your Verification Code!
            </Text>
          </View>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <TextInput style={styles.input} placeholder="0" />
            <TextInput style={styles.input} placeholder="0" />
            <TextInput style={styles.input} placeholder="0" />
            <TextInput style={styles.input} placeholder="0" />
          </View>
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
            onPress={() => navigation.navigate("ResetPassword")}
            style={{
              width: "90%",
              padding: 10,
              backgroundColor: "#0081F1",
              borderRadius: 5,
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>Verify</Text>
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
    justifyContent: "center",
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
