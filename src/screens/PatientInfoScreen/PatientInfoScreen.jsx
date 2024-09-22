import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import HeadingTitle from "../../components/HeadingTitle";
import { COLOR_WHITE } from "../utils/colors";

const PatientInfoScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <HeadingTitle title="Patient Info" />
      </View>
      <ScrollView>
        <View style={[styles.card, styles.shadowProp]}>
          <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: "700" }}>Full Name</Text>
            <TextInput style={styles.input} placeholder="Full Name" />

            <Text style={{ fontWeight: "700" }}>Serial No.</Text>
            <TextInput style={styles.input} placeholder="Serial No." />

            <Text style={{ fontWeight: "700" }}>Gender</Text>
            <View
              style={{
                flexDirection: "row",
                paddingVertical: 10,
              }}
            >
              <Pressable
                style={{
                  backgroundColor: "teal",
                  padding: 10,
                  borderRadius: 10,
                  margin: 5,
                }}
              >
                <Text style={{ color: "white" }}>Male</Text>
              </Pressable>
              <Pressable
                style={{
                  backgroundColor: "teal",
                  padding: 10,
                  borderRadius: 10,
                  margin: 5,
                }}
              >
                <Text style={{ color: "white" }}>Female</Text>
              </Pressable>
              <Pressable
                style={{
                  backgroundColor: "teal",
                  padding: 10,
                  borderRadius: 10,
                  margin: 5,
                }}
              >
                <Text style={{ color: "white" }}>Others</Text>
              </Pressable>
            </View>

            <Text style={{ fontWeight: "700" }}>Age</Text>
            <TextInput style={styles.input} placeholder="Age" />
            <Text style={{ fontWeight: "700" }}>Phone</Text>
            <TextInput style={styles.input} placeholder="Phone" />
            <Text style={{ fontWeight: "700" }}>Patient Weight (Kg)</Text>
            <TextInput style={styles.input} placeholder="Patient Weight (Kg)" />
            <Text style={{ fontWeight: "700" }}>Blood Group</Text>
            <TextInput style={styles.input} placeholder="Blood Group" />
            <Text style={{ fontWeight: "700" }}>Fee (BDT)</Text>
            <TextInput style={styles.input} placeholder="Fee (BDT)" />
            <Text style={{ fontWeight: "700" }}>Discount Price (BDT)</Text>
            <TextInput
              style={styles.input}
              placeholder="Discount Price (BDT)"
            />

            <TouchableOpacity style={styles.button}>
              <Text style={{ color: COLOR_WHITE }}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PatientInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 20,
    margin: 5,
  },
  input: {
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
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
  },
});
