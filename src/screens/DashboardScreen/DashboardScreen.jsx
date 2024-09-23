import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Search from "../../components/Search";
import HeadingTitle from "../../components/HeadingTitle";
import DashboardCard from "../../components/DashboardCard";
import { COLOR_BLACK, COLOR_WHITE } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import SubHeadingTitle from "../../components/SubHeadingTitle";

const DashboardScreen = () => {
  const navigation = useNavigation();

  const goToPatientHistoryScreen = () => {
    navigation.navigate("Patient History");
  };

  const goToPatientListScreen = () => {
    navigation.navigate("Patient List");
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* Heading Title Component */}
        <HeadingTitle title="Welcome, Faisal" />

        {/* Search Component */}
        <Search goto={goToPatientHistoryScreen} />

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
            style={{
              height: 2,
              marginVertical: 10,
              backgroundColor: "white",
            }}
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
        <SubHeadingTitle title="Today's Patient List" />
        <TouchableOpacity style={styles.button} onPress={goToPatientListScreen}>
          <Text style={{ color: COLOR_WHITE }}>Show Patient List</Text>
        </TouchableOpacity>
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
  button: {
    alignItems: "center",
    backgroundColor: "teal",
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
  },
});
