import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLOR_WHITE } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import Divider from "../../components/Divider";
import { errorToast } from "../ToastMessage";
import { Dropdown } from "react-native-element-dropdown";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import axios from "axios";
import Toast from "react-native-toast-message";

const data = [
  { label: "AB+", value: "1" },
  { label: "AB-", value: "2" },
  { label: "O+", value: "3" },
  { label: "O-", value: "4" },
  { label: "A-", value: "5" },
  { label: "A+", value: "6" },
  { label: "B+", value: "7" },
  { label: "B-", value: "8" },
];

const BookingScreen = () => {
  const [loader, setLoader] = useState(false);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("M");
  const [ageYear, setAgeYear] = useState(0);
  const [ageMonth, setAgeMonth] = useState(0);
  const [ageDay, setAgeDay] = useState(0);
  const [weight, setWeight] = useState(0);

  const booking = () => {
    if (fullName.trim() == "") {
      Toast.show({
        type: "error",
        text1: "Full name can not be empty!!",
        position: "bottom",
        visibilityTime: 2000,
        bottomOffset: 100,
      });
      return;
    }

    if (phone.trim() == "") {
      Toast.show({
        type: "error",
        text1: "Mobile can not be empty!!",
        position: "bottom",
        visibilityTime: 2000,
        bottomOffset: 100,
      });
      return;
    }

    if (gender.trim() == "") {
      Toast.show({
        type: "error",
        text1: "Gender can not be empty!!",
        position: "bottom",
        visibilityTime: 2000,
        bottomOffset: 100,
      });
      return;
    }

    if (ageYear.trim() == "") {
      Toast.show({
        type: "error",
        text1: "Year can not be empty!!",
        position: "bottom",
        visibilityTime: 2000,
        bottomOffset: 100,
      });
      return;
    }

    setLoader(true);
    axios
      .post("https://aketbd.com/medikart/api/v1/doctor/booking-appointment", {
        full_name: fullName,
        mobile: phone,
        gender: gender,
        age_year: ageYear,
        age_month: ageMonth,
        age_day: ageDay,
        weight: weight,
        blood_grp: value,
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
          setFullName("");
          setPhone("");
          setGender("");
          setValue("");
          setWeight("");
          setAgeDay("");
          setAgeMonth("");
          setAgeYear("");
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
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>
          <View style={[styles.card, styles.shadowProp]}>
            <View style={{ padding: 10 }}>
              <Text style={{ fontWeight: "700" }}>Serial No.</Text>
              <TextInput
                keyboardType="numeric"
                style={styles.input}
                placeholder="Serial No."
              />
              <Divider />

              <Text style={{ fontWeight: "700" }}>
                Full Name <Text style={{ color: "red" }}>*</Text>
              </Text>
              <TextInput
                value={fullName}
                onChangeText={(value) => {
                  setFullName(value);
                }}
                style={styles.input}
                placeholder="Full Name"
              />
              <Divider />

              <Text style={{ fontWeight: "700" }}>
                Phone <Text style={{ color: "red" }}>*</Text>
              </Text>
              <TextInput
                keyboardType="numeric"
                value={phone}
                onChangeText={(value) => {
                  setPhone(value);
                }}
                style={styles.input}
                placeholder="Phone"
              />
              <Divider />

              <Text style={{ fontWeight: "700" }}>
                Gender <Text style={{ color: "red" }}>*</Text>
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  paddingVertical: 10,
                }}
              >
                <Pressable
                  onPress={() => setGender("M")}
                  style={{
                    flex: 1,
                    backgroundColor: gender === "M" ? "teal" : "white",
                    padding: 10,
                    borderRadius: 8,
                    borderColor: "teal",
                    borderWidth: 1,
                    margin: 5,
                  }}
                >
                  <Text
                    style={{
                      color: gender === "M" ? "white" : "black",
                      textAlign: "center",
                    }}
                  >
                    Male
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setGender("F")}
                  style={{
                    flex: 1,
                    backgroundColor: gender === "F" ? "teal" : "white",
                    padding: 10,
                    borderRadius: 8,
                    borderColor: "teal",
                    borderWidth: 1,
                    margin: 5,
                  }}
                >
                  <Text
                    style={{
                      color: gender === "F" ? "white" : "black",
                      textAlign: "center",
                    }}
                  >
                    Female
                  </Text>
                </Pressable>
                <Pressable
                  onPress={() => setGender("O")}
                  style={{
                    flex: 1,
                    backgroundColor: gender === "O" ? "teal" : "white",
                    padding: 10,
                    borderRadius: 8,
                    borderColor: "teal",
                    borderWidth: 1,
                    margin: 5,
                  }}
                >
                  <Text
                    style={{
                      color: gender === "O" ? "white" : "black",
                      textAlign: "center",
                    }}
                  >
                    Others
                  </Text>
                </Pressable>
              </View>

              <Divider />

              <Text style={{ fontWeight: "700" }}>
                Age (Y/M/D) <Text style={{ color: "red" }}>*</Text>
              </Text>
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  keyboardType="numeric"
                  value={ageYear}
                  onChangeText={(value) => {
                    setAgeYear(value);
                  }}
                  style={styles.ageInput}
                  placeholder="Year"
                  maxLength={3}
                />
                <TextInput
                  keyboardType="numeric"
                  value={ageMonth}
                  onChangeText={(value) => {
                    setAgeMonth(value);
                  }}
                  style={styles.ageInput}
                  placeholder="Month"
                  maxLength={2}
                />
                <TextInput
                  keyboardType="numeric"
                  value={ageDay}
                  onChangeText={(value) => {
                    setAgeDay(value);
                  }}
                  style={styles.ageInput}
                  placeholder="Day"
                  maxLength={2}
                />
              </View>

              <Divider />

              <Text style={{ fontWeight: "700" }}>Blood Group</Text>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: "red" }]}
                selectedTextStyle={styles.selectedTextStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Select item" : "..."}
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                  setValue(item.value);
                  setIsFocus(false);
                }}
                renderLeftIcon={() => (
                  <MaterialIcons
                    style={styles.icon}
                    color={isFocus ? "red" : "teal"}
                    name="bloodtype"
                    size={20}
                  />
                )}
              />
              <Divider />

              <Text style={{ fontWeight: "700" }}>Patient Weight (Kg)</Text>
              <TextInput
                keyboardType="numeric"
                value={weight}
                onChangeText={(value) => {
                  setWeight(value);
                }}
                style={styles.input}
                placeholder="Patient Weight (Kg)"
                maxLength={3}
              />
              <Divider />

              {loader ? (
                <ActivityIndicator size="large" color={"green"} />
              ) : (
                <TouchableOpacity
                  onPress={() => booking()}
                  style={styles.button}
                >
                  <Text style={{ color: COLOR_WHITE }}>Add Appointment</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
  dropdown: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 5,
    marginTop: 8,
  },
  selectedTextStyle: {
    color: "green",
  },
});
