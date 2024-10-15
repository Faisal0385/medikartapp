import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Platform,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import Search from "../../components/Search";
import HeadingTitle from "../../components/HeadingTitle";
import DashboardCard from "../../components/DashboardCard";
import { COLOR_WHITE } from "../../utils/colors";
import { useFocusEffect } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import SubHeadingTitle from "../../components/SubHeadingTitle";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import DashboardAppBar from "./components/DashboardAppBar";
import {
  goToPatientHistoryScreen,
  goToPatientListScreen,
  goToSignIntScreen,
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

  // Logout
  const logoutBtn = async () => {
    await AsyncStorage.removeItem("user-data");
    setEmail("");
    setUserDataObj({});
    authUser();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Dashboard App Bar */}
      <DashboardAppBar />

      <ScrollView>
        <View style={{ marginHorizontal: 8 }}>
          {/* Heading Title Component */}
          <View style={{ marginVertical: 8 }}>
            <HeadingTitle title="Welcome Back" />
          </View>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>{email}</Text>

          {/* Search Component */}
          <Search goto={() => goToPatientHistoryScreen(navigation)} />

          {/* Income Card  */}
          <DashboardCard
            title="Today's Income"
            amount={7000}
            bgcolor="#17B48C"
            fonticons={<FontAwesomeIcon name="dollar" size={16} />}
          />

          {/* Patient Card  */}
          <DashboardCard
            title="Today's Patient"
            amount={100}
            bgcolor="#FA4D24"
            fonticons={<FontAwesomeIcon name="users" size={16} />}
          />

          <Divider />

          {/* Sub Heading Title Component */}
          <SubHeadingTitle title="Today's Patient List" />

          {/* Patient List */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => goToPatientListScreen(navigation)}
          >
            <Text style={{ color: COLOR_WHITE }}>
              {" "}
              <FontAwesomeIcon name="user-circle" size={18} /> Show Patient List
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => logoutBtn()}>
            <Text style={{ color: COLOR_WHITE }}>
              {" "}
              <FontAwesomeIcon name="user-circle" size={18} /> Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  button: {
    alignItems: "center",
    backgroundColor: "teal",
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
  },
});
