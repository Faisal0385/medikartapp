import {
  Image,
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
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const DashboardScreen = () => {
  const navigation = useNavigation();

  const goToPatientHistoryScreen = () => {
    navigation.navigate("Patient History");
  };

  const goToPatientListScreen = () => {
    navigation.navigate("Patient List");
  };

  const goToProfileScreen = () => {
    navigation.navigate("ProfileScreen");
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBottomColor: "lightgrey",
            paddingVertical: 20,
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("../../../assets/qrcode.png")}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goToProfileScreen()}>
            <Image
              source={require("../../../assets/logo/logo.png")}
              style={{ width: 25, height: 25 }}
            />
          </TouchableOpacity>
        </View>
        {/* Heading Title Component */}
        <View style={{ marginVertical: 15 }}>
          <HeadingTitle title="Welcome, Faisal" />
        </View>

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
            <Text style={{ color: "white" }}>
              <FontAwesomeIcon name="users" size={16} />
            </Text>
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
          <Text style={{ color: COLOR_WHITE }}>
            {" "}
            <FontAwesomeIcon name="user-circle" size={18} /> Show Patient List
          </Text>
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
    paddingHorizontal: 15,
  },
  button: {
    alignItems: "center",
    backgroundColor: "teal",
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
  },
});
