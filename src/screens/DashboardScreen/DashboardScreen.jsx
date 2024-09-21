import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Search from "../../components/Search";
import HeadingTitle from "../../components/HeadingTitle";
import SubHeadingTitle from "../../components/SubHeadingTitle";
import DashboardCard from "../../components/DashboardCard";
import { COLOR_BLACK } from "../utils/colors";

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* Heading Title Component */}
        <HeadingTitle title="Dashboard" />

        {/* Search Component */}
        <Search />

        <DashboardCard />

        <View
          style={{
            backgroundColor: "#FA4D24",
            marginVertical: 20,
            padding: 30,
            borderRadius: 5,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: "white" }}>0</Text>
            <Text style={{ color: "white" }}>Person</Text>
          </View>
          <View
            style={{ height: 2, marginVertical: 10, backgroundColor: "white" }}
          ></View>
          <Text style={{ color: "white" }}>Today's Patient</Text>
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

        <SubHeadingTitle title="Categories" />

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
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
              <Text style={{ color: "white" }}>0</Text>
              <Text style={{ color: "white" }}>Person</Text>
            </View>
            <View
              style={{
                height: 2,
                marginVertical: 10,
                backgroundColor: "white",
              }}
            ></View>
            <Text style={{ color: "white" }}>Today's Patient</Text>
          </View>
          <View
            style={{
              backgroundColor: "#FA4D24",
              marginVertical: 20,
              padding: 30,
              borderRadius: 5,
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ color: "white" }}>0</Text>
              <Text style={{ color: "white" }}>Person</Text>
            </View>
            <View
              style={{
                height: 2,
                marginVertical: 10,
                backgroundColor: "white",
              }}
            ></View>
            <Text style={{ color: "white" }}>Today's Patient</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 20,
  },
});
