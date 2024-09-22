import {
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
import HeadingTitle from "../../components/HeadingTitle";
import { COLOR_WHITE, COLOR_BLACK } from "../../utils/colors";

const ReceiptScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <HeadingTitle title="Receipt" />
      </View>
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <Image
          source={require("../../../assets/qrcode.png")}
          style={{ height: 100, width: 100 }}
        />
      </View>

      <ScrollView>
        <View style={[styles.card, styles.shadowProp]}>
          <View style={{ padding: 10 }}>
            <Text
              style={{ backgroundColor: "#eae8e8", padding: 10, marginTop: 10 }}
            >
              <Text
                style={{ fontWeight: "700", fontSize: 20, textAlign: "center" }}
              >
                ZYONA LEASER
              </Text>
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
              <Text style={{ fontWeight: "700" }}>Payment Status: </Text> Paid
              ||
              <Text style={{ fontWeight: "700" }}> Time: </Text> 7:30 PM
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
              <Text style={{ fontWeight: "700" }}>Full Name: </Text>Jon Doe
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
              <Text style={{ fontWeight: "700" }}>Phone: </Text> 01325234556
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
              <Text style={{ fontWeight: "700" }}>Fee (BDT): </Text> 700
            </Text>

            <TouchableOpacity style={styles.button}>
              <Text style={{ color: COLOR_WHITE }}>Print Receipt</Text>
            </TouchableOpacity>
            <Text
              style={{ textAlign: "center", fontStyle: "italic", fontSize: 12 }}
            >
              Receipt Print Time: 7:30 PM
            </Text>
            <Text
              style={{ textAlign: "center", fontStyle: "italic", fontSize: 10 }}
            >
              Powered By: Project Photon
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
    paddingHorizontal: 20,
    margin: 5,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FA4D24",
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
  },
});
