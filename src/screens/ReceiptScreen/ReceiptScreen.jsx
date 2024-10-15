import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Platform,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import HeadingTitle from "../../components/HeadingTitle";
import { COLOR_WHITE, COLOR_BLACK } from "../../utils/colors";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import Toast from "react-native-toast-message";

const ReceiptScreen = ({ navigation }) => {
  const route = useRoute();
  const data = route.params?.data;
  const [loader, setLoader] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(0);

  const goToPaymentScreen = (bid) => {
    if (paymentAmount === 0) {
      Toast.show({
        type: "error",
        text1: "Payment can not be empty!!",
        position: "bottom",
        visibilityTime: 2000,
        bottomOffset: 100,
      });
      return;
    }

    axios
      .post("https://aketbd.com/medikart/api/v1/doctor/booking-payment", {
        booking_id: bid,
        payment_amount: paymentAmount,
      })
      .then(function (response) {
        setLoader(false);
        if (response.data.status == "success") {
          Toast.show({
            type: "success",
            text1: response.data.message,
            position: "bottom",
            visibilityTime: 2000,
            bottomOffset: 100,
          });
          setPaymentAmount(0);
          navigation.navigate("Thanks");
        } else if (response.data.status == "error") {
          Toast.show({
            type: "error",
            text1: response.data.message,
            position: "bottom",
            visibilityTime: 2000,
            bottomOffset: 100,
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
            position: "bottom",
            visibilityTime: 2000,
            bottomOffset: 100,
          });
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <HeadingTitle title="Payment Receipt" />
      </View>
      <View style={{ alignItems: "center", marginTop: 5 }}>
        <Image
          source={require("../../../assets/qrcode.png")}
          style={{ height: 70, width: 70 }}
        />
      </View>

      <ScrollView>
        <View style={[styles.card, styles.shadowProp]}>
          <View style={{ padding: 10 }}>
            <Text
              style={{
                backgroundColor: "#eae8e8",
                padding: 5,
                marginTop: 10,
                fontWeight: "700",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Zyona Laser & Skin Care Center
            </Text>
            <View style={{ alignItems: "center", marginTop: 10 }}>
              <Text>Contact: 01307-842071</Text>
              <Text>
                Address: House #499/685, Siddique Valley, 3rd Floor, Agrabad
                Access Road, Chattogram
              </Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <View
                style={{
                  height: 2,
                  width: "30%",
                  marginVertical: 10,
                  backgroundColor: COLOR_BLACK,
                }}
              ></View>
            </View>

            <View
              style={{ backgroundColor: "#eae8e8", padding: 8, marginTop: 10 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 5,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontWeight: "700" }}>Payment Status: </Text>
                  <Text style={{ color: "red", fontWeight: "700" }}>Due</Text>
                </View>
                <View>
                  <Text>
                    <Text style={{ fontWeight: "700" }}>Fee (BDT): </Text> 700
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 5,
                }}
              >
                <View>
                  <Text style={{ fontWeight: "700" }}>Date: {data.date}</Text>
                </View>
                <View>
                  <Text style={{ fontWeight: "700" }}>Time: {data.time}</Text>
                </View>
              </View>
            </View>

            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <View
                style={{
                  height: 2,
                  width: "100%",
                  marginVertical: 10,
                  backgroundColor: COLOR_BLACK,
                }}
              ></View>
            </View>

            <Text
              style={{ backgroundColor: "#eae8e8", padding: 10, marginTop: 10 }}
            >
              <Text style={{ fontWeight: "700" }}>Full Name: </Text>
              {data.full_name}
            </Text>

            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <View
                style={{
                  height: 2,
                  width: "100%",
                  marginVertical: 10,
                  backgroundColor: COLOR_BLACK,
                }}
              ></View>
            </View>

            <Text
              style={{ backgroundColor: "#eae8e8", padding: 10, marginTop: 10 }}
            >
              <Text style={{ fontWeight: "700" }}>Phone: </Text> {data.mobile}
            </Text>

            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <View
                style={{
                  height: 2,
                  width: "100%",
                  marginVertical: 10,
                  backgroundColor: COLOR_BLACK,
                }}
              ></View>
            </View>

            <TextInput
              style={styles.input}
              placeholder="Payment"
              keyboardType="numeric"
              onChangeText={(value) => setPaymentAmount(value)}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => goToPaymentScreen(data.id)}
            >
              <Text style={{ color: COLOR_WHITE }}>Payment</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity
              style={styles.button}
              onPress={goToThankYouScreen}
            >
              <Text style={{ color: COLOR_WHITE }}>Print Receipt</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.skipButton}
              onPress={goToThankYouScreen}
            >
              <Text style={{ color: COLOR_WHITE }}>Skip</Text>
            </TouchableOpacity> */}

            <Text
              style={{ textAlign: "center", fontStyle: "italic", fontSize: 12 }}
            >
              Receipt Print Time: 7:30 PM
            </Text>
            <Text
              style={{ textAlign: "center", fontStyle: "italic", fontSize: 10 }}
            >
              Powered By: KAF Tech BD
            </Text>
            <Text
              style={{ textAlign: "center", fontStyle: "italic", fontSize: 10 }}
            >
              Copyright @2024
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReceiptScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 10,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FA4D24",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  skipButton: {
    alignItems: "center",
    backgroundColor: "#FA4D24",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  input: {
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#eae8e8",
  },
});
