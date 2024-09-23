import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeadingTitle from "../../components/HeadingTitle";
import DashboardCard from "../../components/DashboardCard";
import Search from "../../components/Search";
import SubHeadingTitle from "../../components/SubHeadingTitle";
import { COLOR_BLACK } from "../../utils/colors";

const PatientListScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Heading Title Component */}
      <HeadingTitle title="Max Hospital" />

      {/* Search Component */}
      <Search />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600" }}>
          Date: 12-08-2024
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Count(100)</Text>
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

      <ScrollView>
        <View
          style={{
            backgroundColor: "#17B48C",
            marginVertical: 15,
            padding: 30,
            borderRadius: 5,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "white" }}>Ibrahim Hossain Ibrahim</Text>
            <Text style={{ color: "white" }}>700 BDT</Text>
          </View>
          <View
            style={{ height: 2, marginVertical: 10, backgroundColor: "white" }}
          ></View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "white" }}>Status: Paid</Text>
            <Text style={{ color: "white" }}>TIme: 7:30 PM</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#17B48C",
            marginVertical: 10,
            padding: 30,
            borderRadius: 5,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "white" }}>Ibrahim Hossain</Text>
            <Text style={{ color: "white" }}>700 BDT</Text>
          </View>
          <View
            style={{ height: 2, marginVertical: 10, backgroundColor: "white" }}
          ></View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "white" }}>Status: Paid</Text>
            <Text style={{ color: "white" }}>TIme: 7:30 PM</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#17B48C",
            marginVertical: 20,
            padding: 30,
            borderRadius: 5,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "white" }}>Ibrahim Hossain</Text>
            <Text style={{ color: "white" }}>700 BDT</Text>
          </View>
          <View
            style={{ height: 2, marginVertical: 10, backgroundColor: "white" }}
          ></View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "white" }}>Status: Paid</Text>
            <Text style={{ color: "white" }}>TIme: 7:30 PM</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#17B48C",
            marginVertical: 20,
            padding: 30,
            borderRadius: 5,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "white" }}>Ibrahim Hossain</Text>
            <Text style={{ color: "white" }}>700 BDT</Text>
          </View>
          <View
            style={{ height: 2, marginVertical: 10, backgroundColor: "white" }}
          ></View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "white" }}>Status: Paid</Text>
            <Text style={{ color: "white" }}>TIme: 7:30 PM</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#17B48C",
            marginVertical: 20,
            padding: 30,
            borderRadius: 5,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "white" }}>Ibrahim Hossain</Text>
            <Text style={{ color: "white" }}>700 BDT</Text>
          </View>
          <View
            style={{ height: 2, marginVertical: 10, backgroundColor: "white" }}
          ></View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "white" }}>Status: Paid</Text>
            <Text style={{ color: "white" }}>TIme: 7:30 PM</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PatientListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 20,
    margin: 10,
  },
});
