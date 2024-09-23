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
import { useNavigation } from "@react-navigation/native";

const BookingScreen = () => {
  const navigation = useNavigation();

  const goToReceiptScreen = () => {
    navigation.navigate("Receipt");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <HeadingTitle title="Book Appointment" />
      </View>
      <ScrollView>
        <View style={[styles.card, styles.shadowProp]}>
          <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: "700" }}>Serial No.</Text>
            <Text
              style={{
                backgroundColor: "#eae8e8",
                padding: 10,
                marginTop: 10,
              }}
            >
              32
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

            <Text style={{ fontWeight: "700" }}>Full Name</Text>
            <Text
              style={{ backgroundColor: "#eae8e8", padding: 10, marginTop: 10 }}
            >
              Jon Doe
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

            <View
              style={{
                flexDirection: "row",
              }}
            >
              <View style={{ marginRight: 10, flex: 1 }}>
                <Text style={{ fontWeight: "700" }}>Age</Text>
                <Text
                  style={{
                    backgroundColor: "#eae8e8",
                    padding: 10,
                    marginTop: 10,
                  }}
                >
                  28 Y 6 M
                </Text>
              </View>

              <View style={{ marginLeft: 10, flex: 1 }}>
                <Text style={{ fontWeight: "700" }}>Gender</Text>
                <Text
                  style={{
                    backgroundColor: "#eae8e8",
                    padding: 10,
                    marginTop: 10,
                  }}
                >
                  Male
                </Text>
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

            <Text style={{ fontWeight: "700" }}>Phone</Text>
            <Text
              style={{ backgroundColor: "#eae8e8", padding: 10, marginTop: 10 }}
            >
              01325234556
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

            <View
              style={{
                flexDirection: "row",
                marginVertical: 10,
              }}
            >
              <View style={{ marginRight: 10, flex: 1 }}>
                <Text style={{ fontWeight: "700" }}>Patient Weight (Kg)</Text>
                <Text
                  style={{
                    backgroundColor: "#eae8e8",
                    padding: 10,
                    marginTop: 10,
                  }}
                >
                  60
                </Text>
              </View>

              <View style={{ marginRight: 10, flex: 1 }}>
                <Text style={{ fontWeight: "700" }}>Blood Group</Text>
                <Text
                  style={{
                    backgroundColor: "#eae8e8",
                    padding: 10,
                    marginTop: 10,
                  }}
                >
                  AB+
                </Text>
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

            <Text style={{ fontWeight: "700" }}>Fee (BDT)</Text>
            <TextInput style={styles.input} placeholder="Fee (BDT)" />

            <TouchableOpacity style={styles.button} onPress={goToReceiptScreen}>
              <Text style={{ color: COLOR_WHITE }}>Add Appointment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={{ color: COLOR_WHITE }}>Edit Patient Info</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#eae8e8",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    margin: 12,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#17B48C",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
});
