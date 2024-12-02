import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLOR_WHITE } from "../../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from "react-native-element-dropdown";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import axios from "axios";
import Divider from "../../../components/Divider";
import { authToaster, ToastMsg } from "../../ToastMessage";

const data = [
  { label: "AB+", value: "AB+" },
  { label: "AB-", value: "AB-" },
  { label: "O+", value: "O+" },
  { label: "O-", value: "O-" },
  { label: "A-", value: "A-" },
  { label: "A+", value: "A+" },
  { label: "B+", value: "B+" },
  { label: "B-", value: "B-" },
];
const EditPatientInfo = ({ userInfo, asstID }) => {
  const navigation = useNavigation();
  const [isFocus, setIsFocus] = useState(false);
  const [loader, setLoader] = useState(false);

  // Form Data
  const [serialNo, setSerialNo] = useState("");
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("M");
  const [ageYear, setAgeYear] = useState(0);
  const [ageMonth, setAgeMonth] = useState(0);
  const [ageDay, setAgeDay] = useState(0);
  const [value, setValue] = useState(null);
  const [weight, setWeight] = useState(0);

  const makeBooking = async () => {
    setLoader(true);
    axios
      .post(
        "https://aketbd.com/medikart/api/v1/doctor/re-booking-appointment",
        {
          asst_id: asstID,
          booking_id: userInfo.id,
          serial_no: serialNo,
          full_name: fullName,
          gender: gender,
          age_year: ageYear,
          age_month: ageMonth,
          age_day: ageDay,
          weight: weight,
          blood_grp: value,
        }
      )
      .then(function (response) {
        setLoader(false);

        if (response.data.status == "error") {
          authToaster("error", response.data.message, "Try agian!!", "top");
        }

        if (response.data.status == "success") {
          ToastMsg("success", response.data.message, "top");
          setSerialNo("");
          setFullName("");
          setGender("");
          setAgeDay("");
          setAgeMonth("");
          setAgeYear("");
          setValue("");
          setWeight("");
          navigation.navigate("Bottom Navbar");
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

  return (
    <View style={{ padding: 10 }}>
      <View>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "500",
            fontFamily: "montSemiBold",
            marginVertical: 5,
            textAlign: "center",
          }}
        >
          Re-Booking Patient Info
        </Text>
      </View>
      <Divider />
      <Text
        style={{
          fontWeight: "700",
          fontSize: 18,
          textAlign: "center",
          backgroundColor: "lightgrey",
          borderRadius: 10,
          padding: 10,
        }}
      >
        Phone: {userInfo.mobile}
      </Text>
      <Divider />
      <Text style={{ fontWeight: "700", fontSize: 17 }}>Serial No.</Text>
      <TextInput
        maxLength={1000}
        value={serialNo}
        onChangeText={(value) => setSerialNo(value)}
        keyboardType="numeric"
        style={styles.input}
        placeholder="Serial No."
      />
      <Divider />

      <Text style={{ fontWeight: "700", fontSize: 17 }}>
        Full Name:{" "}
        <Text style={{ fontStyle: "italic", color: "darkgreen" }}>
          {userInfo.full_name}
        </Text>
      </Text>
      <TextInput
        maxLength={50}
        value={fullName}
        onChangeText={(value) => {
          setFullName(value);
        }}
        style={styles.input}
        placeholder="Full Name"
      />
      <Divider />

      <Text style={{ fontWeight: "700", fontSize: 17 }}>
        Gender:{" "}
        <Text style={{ fontStyle: "italic", color: "darkgreen" }}>
          {userInfo.gender}
        </Text>
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

      <Text style={{ fontWeight: "700", fontSize: 17 }}>
        Blood Group:{" "}
        <Text style={{ fontStyle: "italic", color: "darkgreen" }}>
          {userInfo.blood_grp}
        </Text>
      </Text>
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

      <Text style={{ fontWeight: "700", fontSize: 17 }}>
        Age (Y/M/D):{" "}
        <Text style={{ fontStyle: "italic", color: "darkgreen" }}>
          {userInfo.age_year} Y - {userInfo.age_month ?? 0} M -{" "}
          {userInfo.age_day ?? 0} D
        </Text>
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

      <Text style={{ fontWeight: "700", fontSize: 17 }}>
        Patient Weight:{" "}
        <Text style={{ fontStyle: "italic", color: "darkgreen" }}>
          {userInfo.weight} Kg
        </Text>
      </Text>
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
        <ActivityIndicator color={"green"} />
      ) : (
        <View>
          <TouchableOpacity onPress={() => makeBooking()} style={styles.button}>
            <Text style={{ color: COLOR_WHITE }}>Add Appointment</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default EditPatientInfo;

const styles = StyleSheet.create({
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
  button: {
    alignItems: "center",
    backgroundColor: "#17B48C",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 10,
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
