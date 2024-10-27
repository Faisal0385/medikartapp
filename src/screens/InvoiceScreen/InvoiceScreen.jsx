import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useState } from "react";
import HeadingTitle from "../../components/HeadingTitle";
import { COLOR_WHITE, COLOR_BLACK } from "../../utils/colors";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import Toast from "react-native-toast-message";
import InfoSection from "./components/InfoSection";

const InvoiceScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const biid = route.params?.payID;
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState([]);

  useFocusEffect(
    useCallback(() => {
      getPayData();
    }, [])
  );

  const getPayData = () => {
    setLoader(true);
    axios
      .get(`https://aketbd.com/medikart/api/v1/patient/data/${biid}`)
      .then(function (response) {
        setLoader(false);
        if (response.data.status == "success") {
          setData(response.data.data);
        } else if (response.data.status == "error") {
          Toast.show({
            type: "error",
            text1: response.data.message,
            position: "bottom",
            visibilityTime: 2000,
            bottomOffset: 100,
          });
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      {loader ? (
        <ActivityIndicator />
      ) : (
        <View>
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
            <View style={{ padding: 10 }}>
              <InfoSection />
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
                style={{
                  backgroundColor: "#eae8e8",
                  padding: 8,
                  marginTop: 10,
                }}
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
                      {data.payment_status?.toUpperCase()}
                    </Text>
                  </View>
                  <View>
                    <Text>
                      <Text style={{ fontWeight: "700" }}>Visit ID: </Text>{" "}
                      {data.visit_id}
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
                style={{
                  backgroundColor: "#eae8e8",
                  padding: 10,
                  marginTop: 10,
                }}
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
                style={{
                  backgroundColor: "#eae8e8",
                  padding: 10,
                  marginTop: 10,
                }}
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

              <Text
                style={{
                  backgroundColor: "#eae8e8",
                  padding: 10,
                  marginTop: 10,
                }}
              >
                <Text style={{ fontWeight: "700" }}>Payment: </Text>{" "}
                {data.payment_amount}
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

              {/* Button */}

              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Thanks")}
              >
                <Text style={{ color: COLOR_WHITE }}>Print Receipt</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.skipButton}
                onPress={() => navigation.navigate("Thanks")}
              >
                <Text style={{ color: COLOR_WHITE }}>Skip</Text>
              </TouchableOpacity>

              <Text
                style={{
                  textAlign: "center",
                  fontStyle: "italic",
                  fontSize: 12,
                }}
              >
                Receipt Print Time: 7:30 PM
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontStyle: "italic",
                  fontSize: 10,
                }}
              >
                Powered By: KAF Tech BD
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontStyle: "italic",
                  fontSize: 10,
                }}
              >
                Copyright @2024
              </Text>
            </View>
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default InvoiceScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 10,
    paddingTop: Platform.OS === "android" ? 10 : 0,
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
    borderColor: "grey",
  },
});
