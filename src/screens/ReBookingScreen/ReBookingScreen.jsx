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
import React, { useCallback, useEffect, useState } from "react";
import { COLOR_WHITE } from "../../utils/colors";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import Divider from "../../components/Divider";
import { authToaster, ToastMsg } from "../ToastMessage";
import { Dropdown } from "react-native-element-dropdown";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { goToDashboardScreen } from "../../navigations/routes";

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

const ReBookingScreen = () => {
  const { params } = useRoute();

  // console.log(params.id);

  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState(null);
  const [userDataObj, setUserDataObj] = useState({});
  const [loader, setLoader] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  // Form Data
  const [serialNo, setSerialNo] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("M");
  const [ageYear, setAgeYear] = useState(0);
  const [ageMonth, setAgeMonth] = useState(0);
  const [ageDay, setAgeDay] = useState(0);
  const [value, setValue] = useState(null);
  const [weight, setWeight] = useState(0);

  useEffect(() => {
    setLoader(true);
    // authUser();
    getData(params?.id);
  }, []);

  // useFocusEffect(
  //   useCallback(() => {
  //     console.log("I am here");

  //     setLoader(true);
  //     // authUser();
  //     getData(params?.id);
  //   }, [])
  // );

  const getData = async (id) => {
    axios
      .get(`https://aketbd.com/medikart/api/v1/patient/data/${id}`)
      .then(function (response) {
        if (response.data.status == "success") {
          setLoader(false);
          setUserInfo(response?.data.data);

          // setSerialNo("");
          setFullName(userInfo.full_name);
          setPhone(userInfo.mobile);
          setGender(userInfo.gender);
          setAgeDay(userInfo.age_day);
          setAgeMonth(userInfo.age_month);
          setAgeYear(userInfo.age_year);
          setValue(userInfo.blood_grp);
          setWeight(userInfo.weight);
          console.log(userInfo.gender);
        } else {
          setLoader(false);
          authToaster(
            "error",
            "Somthing went wrong!!",
            "Try agian!!",
            "bottom"
          );
        }
      })
      .catch(function (error) {
        setLoader(false);
        if (error.status == 500) {
          authToaster(
            "error",
           "Somthing went wrong!!",
            "Try agian!!",
            "bottom"
          );
        }
      });
  };

  // Authentication
  // const authUser = async () => {
  //   const userData = await AsyncStorage.getItem("user-data");
  //   const userDataObj = JSON.parse(userData);
  //   if (!userDataObj) {
  //     goToSignIntScreen(navigation);
  //     return;
  //   }
  //   setUserDataObj(userDataObj[0]);
  // };

  // const makeBooking = () => {
  //   if (fullName.trim() == "") {
  //     ToastMsg("error", "Full name can not be empty!!", "top");
  //     return;
  //   }

  //   if (phone.trim() == "") {
  //     ToastMsg("error", "Mobile can not be empty!!", "top");
  //     return;
  //   }

  //   if (gender.trim() == "") {
  //     ToastMsg("error", "Gender can not be empty!!", "top");
  //     return;
  //   }

  //   if (ageYear == "") {
  //     ToastMsg("error", "Year can not be empty!!", "top");
  //     return;
  //   }

  //   setLoader(true);
  //   axios
  //     .post("https://aketbd.com/medikart/api/v1/doctor/booking-appointment", {
  //       asst_id: userDataObj.id,
  //       full_name: fullName,
  //       mobile: phone,
  //       gender: gender,
  //       age_year: ageYear,
  //       age_month: ageMonth,
  //       age_day: ageDay,
  //       weight: weight,
  //       blood_grp: value,
  //     })
  //     .then(function (response) {
  //       setLoader(false);

  //       if (response.data.status == "success") {
  //         ToastMsg("success", response.data.message, "top");
  //         setSerialNo("");
  //         setFullName("");
  //         setPhone("");
  //         setGender("");
  //         setAgeDay("");
  //         setAgeMonth("");
  //         setAgeYear("");
  //         setValue("");
  //         setWeight("");
  //       }
  //     })
  //     .catch(function (error) {
  //       setLoader(false);
  //       if (error.status == 500) {
  //         authToaster(
  //           "error",
  //           "Somthing went wrong!!",
  //           "Try agian!!",
  //           "bottom"
  //         );
  //       }
  //     });
  // };
  console.log("this is ");
  console.log(fullName);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>
          {loader ? (
            <ActivityIndicator size="large" color={"green"} />
          ) : userInfo ? (
            <View style={[styles.card, styles.shadowProp]}>
              <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: "700" }}>Serial No. Reb</Text>
                <TextInput
                  maxLength={1000}
                  value={serialNo}
                  onChangeText={(value) => setSerialNo(value)}
                  keyboardType="numeric"
                  style={[styles.input, { color: "grey" }]}
                  placeholder="Serial No."
                />
                <Divider />

                <Text style={{ fontWeight: "700" }}>Full Name</Text>
                <TextInput
                  editable={false}
                  selectTextOnFocus={false}
                  placeholder={fullName}
                  value={fullName}
                  style={[styles.input, { backgroundColor: "#f0f0f0" }]}
                />
                <Divider />

                <Text style={{ fontWeight: "700" }}>Phone</Text>
                <TextInput
                  editable={false}
                  selectTextOnFocus={false}
                  value={phone}
                  style={[styles.input, { backgroundColor: "#f0f0f0" }]}
                />
                <Divider />

                <Text style={{ fontWeight: "700" }}>Gender</Text>
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
                      backgroundColor:
                        userInfo.gender === "M" ? "teal" : "white",
                      padding: 10,
                      borderRadius: 8,
                      borderColor: "teal",
                      borderWidth: 1,
                      margin: 5,
                    }}
                  >
                    <Text
                      style={{
                        color: userInfo.gender === "M" ? "white" : "black",
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
                      backgroundColor:
                        userInfo.gender === "F" ? "teal" : "white",
                      padding: 10,
                      borderRadius: 8,
                      borderColor: "teal",
                      borderWidth: 1,
                      margin: 5,
                    }}
                  >
                    <Text
                      style={{
                        color: userInfo.gender === "F" ? "white" : "black",
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
                      backgroundColor:
                        userInfo.gender === "O" ? "teal" : "white",
                      padding: 10,
                      borderRadius: 8,
                      borderColor: "teal",
                      borderWidth: 1,
                      margin: 5,
                    }}
                  >
                    <Text
                      style={{
                        color: userInfo.gender === "O" ? "white" : "black",
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
                    value={userInfo.age_month}
                    onChangeText={(value) => {
                      setAgeMonth(value);
                    }}
                    style={styles.ageInput}
                    placeholder="Month"
                    maxLength={2}
                  />
                  <TextInput
                    keyboardType="numeric"
                    value={userInfo.age_day}
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
                  maxHeight={250}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? "Select item" : "..."}
                  value={userInfo.value}
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
                  value={userInfo.weight}
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
                  <View>
                    <TouchableOpacity
                      onPress={() => makeBooking()}
                      style={styles.button}
                    >
                      <Text style={{ color: COLOR_WHITE }}>
                        Add Appointment
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => goToDashboardScreen(navigation)}
                      style={[styles.button, { backgroundColor: "red" }]}
                    >
                      <Text style={{ color: COLOR_WHITE }}>
                        Cancel Appointment
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
          ) : (
            <Text>No Data</Text>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ReBookingScreen;

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
