import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Search from "../../components/Search";
import React from "react";
import { COLOR_WHITE } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";

const PatientHistory = () => {

  const navigation = useNavigation();

  const goToBookingScreen = () => {
    navigation.navigate("Patient Info");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Component */}
      <View style={{ paddingHorizontal: 10 }}>
        <Search />
      </View>

      <ScrollView>
        <View style={[styles.card, styles.shadowProp]}>
          <View style={{ padding: 10 }}>
            <Text
              style={{
                backgroundColor: "#eae8e8",
                padding: 10,
                marginVertical: 5,
              }}
            >
              <Text style={{ fontWeight: "700" }}>Date </Text> 12-12-24
            </Text>

            <Text
              style={{
                backgroundColor: "#eae8e8",
                padding: 10,
                marginVertical: 5,
              }}
            >
              <Text style={{ fontWeight: "700" }}>Name: </Text> Jon Doe
            </Text>

            <Text
              style={{
                backgroundColor: "#eae8e8",
                padding: 10,
                marginVertical: 5,
              }}
            >
              <Text style={{ fontWeight: "700" }}>Phone: </Text>01325234556
            </Text>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles.button} onPress={goToBookingScreen}>
                <Text style={{ color: COLOR_WHITE }}>Re-Appointment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={[styles.card, styles.shadowProp]}>
          <View style={{ padding: 10 }}>
            <Text
              style={{
                backgroundColor: "#eae8e8",
                padding: 10,
                marginVertical: 5,
              }}
            >
              <Text style={{ fontWeight: "700" }}>Date </Text> 12-12-24
            </Text>

            <Text
              style={{
                backgroundColor: "#eae8e8",
                padding: 10,
                marginVertical: 5,
              }}
            >
              <Text style={{ fontWeight: "700" }}>Name: </Text> Jon Doe
            </Text>

            <Text
              style={{
                backgroundColor: "#eae8e8",
                padding: 10,
                marginVertical: 5,
              }}
            >
              <Text style={{ fontWeight: "700" }}>Phone: </Text>01325234556
            </Text>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles.button}>
                <Text style={{ color: COLOR_WHITE }}>Re-Appointment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={[styles.card, styles.shadowProp]}>
          <View style={{ padding: 10 }}>
            <Text
              style={{
                backgroundColor: "#eae8e8",
                padding: 10,
                marginVertical: 5,
              }}
            >
              <Text style={{ fontWeight: "700" }}>Date </Text> 12-12-24
            </Text>

            <Text
              style={{
                backgroundColor: "#eae8e8",
                padding: 10,
                marginVertical: 5,
              }}
            >
              <Text style={{ fontWeight: "700" }}>Name: </Text> Jon Doe
            </Text>

            <Text
              style={{
                backgroundColor: "#eae8e8",
                padding: 10,
                marginVertical: 5,
              }}
            >
              <Text style={{ fontWeight: "700" }}>Phone: </Text>01325234556
            </Text>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles.button}>
                <Text style={{ color: COLOR_WHITE }}>Re-Appointment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={[styles.card, styles.shadowProp]}>
          <View style={{ padding: 10 }}>
            <Text
              style={{
                backgroundColor: "#eae8e8",
                padding: 10,
                marginVertical: 5,
              }}
            >
              <Text style={{ fontWeight: "700" }}>Date </Text> 12-12-24
            </Text>

            <Text
              style={{
                backgroundColor: "#eae8e8",
                padding: 10,
                marginVertical: 5,
              }}
            >
              <Text style={{ fontWeight: "700" }}>Name: </Text> Jon Doe
            </Text>

            <Text
              style={{
                backgroundColor: "#eae8e8",
                padding: 10,
                marginVertical: 5,
              }}
            >
              <Text style={{ fontWeight: "700" }}>Phone: </Text>01325234556
            </Text>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles.button}>
                <Text style={{ color: COLOR_WHITE }}>Re-Appointment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PatientHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    margin: 5,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    margin: 14,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  button: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#17B48C",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 5,
  },
});
