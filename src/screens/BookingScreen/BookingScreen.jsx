import {
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
import { COLOR_WHITE } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import Divider from "./components/Divider";

const BookingScreen = () => {
  const navigation = useNavigation();

  const goToReceiptScreen = () => {
    navigation.navigate("Payment");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={[styles.card, styles.shadowProp]}>
          <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: "700" }}>Serial No.</Text>
            <TextInput style={styles.input} placeholder="Serial No." />
            <Divider />

            <Text style={{ fontWeight: "700" }}>
              Full Name <Text style={{ color: "red" }}>*</Text>
            </Text>
            <TextInput style={styles.input} placeholder="Full Name" />
            <Divider />

            <Text style={{ fontWeight: "700" }}>Phone <Text style={{ color: "red" }}>*</Text></Text>
            <TextInput style={styles.input} placeholder="Phone" />
            <Divider />

            <Text style={{ fontWeight: "700" }}>Gender <Text style={{ color: "red" }}>*</Text></Text>
            <View
              style={{
                flexDirection: "row",
                paddingVertical: 10,
              }}
            >
              <Pressable
                style={{
                  flex: 1,
                  backgroundColor: "teal",
                  padding: 10,
                  borderRadius: 8,
                  borderColor: "teal",
                  borderWidth: 1,
                  margin: 5,
                }}
              >
                <Text style={{ color: "white", textAlign: "center" }}>
                  Male
                </Text>
              </Pressable>
              <Pressable
                style={{
                  flex: 1,
                  backgroundColor: "white",
                  padding: 10,
                  borderRadius: 8,
                  borderColor: "teal",
                  borderWidth: 1,
                  margin: 5,
                }}
              >
                <Text style={{ color: "black", textAlign: "center" }}>
                  Female
                </Text>
              </Pressable>
              <Pressable
                style={{
                  flex: 1,
                  backgroundColor: "white",
                  padding: 10,
                  borderRadius: 8,
                  borderColor: "teal",
                  borderWidth: 1,
                  margin: 5,
                }}
              >
                <Text style={{ color: "black", textAlign: "center" }}>
                  Others
                </Text>
              </Pressable>
            </View>
            <Divider />

            <Text style={{ fontWeight: "700" }}>Age (Y/M/D)</Text>
            <View style={{ flexDirection: "row" }}>
              <TextInput style={styles.ageInput} placeholder="Year" />
              <TextInput style={styles.ageInput} placeholder="Month" />
              <TextInput style={styles.ageInput} placeholder="Day" />
            </View>
            <Divider />

            <Text style={{ fontWeight: "700" }}>Patient Weight (Kg)</Text>
            <TextInput style={styles.input} placeholder="Patient Weight (Kg)" />
            <Divider />

            <Text style={{ fontWeight: "700" }}>Blood Group</Text>
            <TextInput style={styles.input} placeholder="Patient Weight (Kg)" />
            

            <TouchableOpacity style={styles.button} onPress={goToReceiptScreen}>
              <Text style={{ color: COLOR_WHITE }}>Add Appointment</Text>
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
  },
  input: {
    height: 40,
    marginVertical: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#eae8e8",
  },
  ageInput: {
    flex: 1,
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#eae8e8",
    margin: 2,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 5,
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
