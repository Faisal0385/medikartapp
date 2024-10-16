import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import AppBar from "../../components/AppBar";
import { goToDashboardScreen, goToSignIntScreen } from "../../navigations/routes";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FontAwesome6Icon from "react-native-vector-icons/FontAwesome6";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { COLOR_WHITE } from "../../utils/colors";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [userDataObj, setUserDataObj] = useState({});

  useFocusEffect(
    useCallback(() => {
      authUser();
    }, [])
  );

  // Authentication
  const authUser = async () => {
    const userData = await AsyncStorage.getItem("user-data");
    const userDataObj = JSON.parse(userData);
    if (!userDataObj) {
      goToSignIntScreen(navigation);
      return;
    }
    setUserDataObj(userDataObj[0]);
  };

  // Logout
  const logoutBtn = async () => {
    await AsyncStorage.removeItem("user-data");
    setUserDataObj({});
    authUser();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* App Bar */}
      <AppBar appBarText="Profile Screen" routeFunc={goToDashboardScreen} />

      <ScrollView>
        <View style={{ alignItems: "center", padding: 20 }}>
          <Image
            source={require("../../../assets/logo/logo.png")}
            style={styles.profileImage}
          />
          <View style={{ paddingTop: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              Zyona Laser & Skin Care Center
            </Text>
          </View>
          <View>
            <Text>Contact: 01307-842071</Text>
          </View>

          <View style={styles.cardStyle("#17B48C")}>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text style={{ color: COLOR_WHITE, fontWeight: "bold" }}>
                <FontAwesome6Icon name="user" size={16} />
              </Text>
              <Text
                style={{
                  color: COLOR_WHITE,
                  fontWeight: "bold",
                  fontSize: 14,
                  marginHorizontal: 5,
                }}
              >
                {userDataObj.full_name}
              </Text>
            </View>
            <View
              style={{
                height: 2,
                marginVertical: 10,
                backgroundColor: COLOR_WHITE,
              }}
            ></View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text style={{ color: COLOR_WHITE, fontWeight: "bold" }}>
                <MaterialIcons name="mark-email-read" size={16} />
              </Text>
              <Text
                style={{
                  color: COLOR_WHITE,
                  fontWeight: "bold",
                  fontSize: 14,
                  marginHorizontal: 5,
                }}
              >
                {userDataObj.email}
              </Text>
            </View>
            <View
              style={{
                height: 2,
                marginVertical: 10,
                backgroundColor: COLOR_WHITE,
              }}
            ></View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text style={{ color: COLOR_WHITE, fontWeight: "bold" }}>
                <FontAwesome6Icon name="phone" size={16} />
              </Text>
              <Text
                style={{
                  color: COLOR_WHITE,
                  fontWeight: "bold",
                  fontSize: 14,
                  marginHorizontal: 5,
                }}
              >
                {userDataObj.hotline}
              </Text>
            </View>
            <View
              style={{
                height: 2,
                marginVertical: 10,
                backgroundColor: COLOR_WHITE,
              }}
            ></View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Text style={{ color: COLOR_WHITE, fontWeight: "bold" }}>
                <FontAwesome name="address-card" size={16} />
              </Text>
              <Text
                style={{
                  color: COLOR_WHITE,
                  fontWeight: "bold",
                  fontSize: 14,
                  marginHorizontal: 5,
                }}
              >
                {userDataObj.address}
              </Text>
            </View>
            <View
              style={{
                height: 2,
                marginVertical: 10,
                backgroundColor: COLOR_WHITE,
              }}
            ></View>
          </View>

          <TouchableOpacity style={styles.button} onPress={() => logoutBtn()}>
            <Text style={{ color: COLOR_WHITE }}>
              {" "}
              <FontAwesome name="user-circle" size={18} /> Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  appBarStyle: {
    backgroundColor: "lightgrey",
  },
  headerTextStyle: {
    textAlign: "center",
    fontWeight: "900",
    fontSize: 18,
    padding: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
  },
  cardStyle: (bgcolor) => ({
    backgroundColor: bgcolor,
    marginVertical: 20,
    padding: 20,
    borderRadius: 5,
    width: "100%",
  }),
  button: {
    alignItems: "center",
    backgroundColor: "teal",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: "100%",
  },
});
