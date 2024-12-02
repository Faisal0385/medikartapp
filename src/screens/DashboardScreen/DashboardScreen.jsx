import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  ScrollView,
} from "react-native";
import React, { useCallback, useState } from "react";
import HeadingTitle from "../../components/HeadingTitle";
import { COLOR_WHITE, themeColors } from "../../utils/colors";
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import SubHeadingTitle from "../../components/SubHeadingTitle";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import DashboardAppBar from "./components/DashboardAppBar";
import {
  goToPatientHistoryScreen,
  goToPatientListScreen,
  goToSignIntScreen,
  goToUploadDocScreen,
  goToVenueScreen,
} from "../../navigations/routes";
import Divider from "./components/Divider";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DashboardScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
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
    setEmail(userDataObj[0].email);
    setUserDataObj(userDataObj[0]);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Dashboard App Bar */}
      <DashboardAppBar />

      <ScrollView>
        <View style={{ marginHorizontal: 8 }}>
          {/* Heading Title Component */}
          <View style={{ marginVertical: 8 }}>
            <HeadingTitle title="Welcome Back" size={30} />
          </View>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>{email}</Text>

          {/* Sub Heading Title Component */}
          <SubHeadingTitle title="Dashboard" />
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => goToPatientHistoryScreen(navigation)}
              style={{
                flex: 1,
                margin: 10,
                height: 100,
                borderRadius: 8,
                backgroundColor: themeColors.primary,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon name="users" size={16} color={"white"} />
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "700",
                  marginTop: 10,
                  fontFamily: "poppinsSemiBold",
                }}
              >
                Patient History
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => goToPatientListScreen(navigation)}
              style={{
                flex: 1,
                margin: 10,
                height: 100,
                borderRadius: 8,
                backgroundColor: "#FA4D24",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon name="user-circle" size={16} color={"white"} />
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "700",
                  marginTop: 10,
                  fontFamily: "poppinsSemiBold",
                }}
              >
                Patient List
              </Text>
            </TouchableOpacity>
          </View>

          <Divider />
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => goToVenueScreen(navigation)}
              style={{
                flex: 1,
                margin: 10,
                height: 100,
                borderRadius: 8,
                backgroundColor: themeColors.primary,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon name="users" size={16} color={"white"} />
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "700",
                  marginTop: 10,
                  fontFamily: "poppinsSemiBold",
                }}
              >
                Report
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => goToUploadDocScreen(navigation)}
              style={{
                flex: 1,
                margin: 10,
                height: 100,
                borderRadius: 8,
                backgroundColor: "#FA4D24",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesomeIcon name="user-circle" size={16} color={"white"} />
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "700",
                  marginTop: 10,
                  fontFamily: "poppinsSemiBold",
                }}
              >
                Docs Upload
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ?  10 : 0,
  },
  button: {
    alignItems: "center",
    backgroundColor: themeColors.primary,
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
  },
  searchStyle: {
    backgroundColor: "#65ad53",
    marginVertical: 10,
    padding: 15,
    borderRadius: 5,
  },
  searchInputStyle: {
    flex: 1,
    height: 40,
    marginVertical: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: COLOR_WHITE,
  },
  searchBtn: {
    backgroundColor: "#246015",
    marginHorizontal: 5,
    padding: 12,
    borderRadius: 5,
  },
});
