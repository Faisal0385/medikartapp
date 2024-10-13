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
} from "react-native";
import React from "react";
import HeadingTitle from "../../components/HeadingTitle";
import { COLOR_WHITE, COLOR_BLACK } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";

const ReceiptScreen = () => {
  const navigation = useNavigation();

  const goToThankYouScreen = () => {
    navigation.navigate("Thanks");
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
              ZYONA LEASER
            </Text>
            <View style={{ alignItems: "center", marginTop: 10 }}>
              <Text>Contact: 0161544212</Text>
              <Text>
                Address: জব্বার মার্কেট ২য় তলা, উপজেলা সদর বোয়ালখালী চট্টগ্রাম।
                , Boalkhali, Bangladesh
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
                  <Text style={{ color: "green", fontWeight: "700" }}>
                    Paid
                  </Text>
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
                  <Text style={{ fontWeight: "700" }}>Date: 12-12-24</Text>
                </View>
                <View>
                  <Text style={{ fontWeight: "700" }}>Time: 7:30 PM</Text>
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

            <TouchableOpacity
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
});
