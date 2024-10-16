import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Platform,
  StatusBar,
} from "react-native";
import Search from "../../components/Search";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { goToDashboardScreen } from "../../navigations/routes";
import AppBar from "../../components/AppBar";
import HistoryCard from "./components/HistoryCard";

const patientHistorydata = [
  {
    vid: "VID-121224",
    date: "12-12-24",
    name: "Jon Doe",
    phone: "01212545154",
  },
  {
    vid: "VID-121224",
    date: "12-12-24",
    name: "Jon Doe",
    phone: "01212545154",
  },
  {
    vid: "VID-121224",
    date: "12-12-24",
    name: "Jon Doe",
    phone: "01212545154",
  },
  {
    vid: "VID-121224",
    date: "12-12-24",
    name: "Jon Doe",
    phone: "01212545154",
  },
  {
    vid: "VID-121224",
    date: "12-12-24",
    name: "Jon Doe",
    phone: "01212545154",
  },
  {
    vid: "VID-121224",
    date: "12-12-24",
    name: "Jon Doe",
    phone: "01212545154",
  },
];

const PatientHistory = () => {
  const navigation = useNavigation();

  const goToBookingScreen = (navigation) => {
    navigation.navigate("Booking");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* App Bar */}
      <AppBar appBarText="Patient History" routeFunc={goToDashboardScreen} />

      <ScrollView>
        {/* Search Component */}
        <View style={{ paddingHorizontal: 10 }}>
          <Search />
        </View>

        {patientHistorydata.map((item) => {
          return (
            <HistoryCard
              id={item.id}
              vid={item.vid}
              date={item.date}
              name={item.name}
              phone={item.phone}
              routeFun={() => goToBookingScreen(navigation)}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PatientHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
