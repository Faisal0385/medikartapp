import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import AppBar from "../../components/AppBar";
import { goToDashboardScreen } from "../../navigations/routes";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
            <Text style={{ fontSize: 22, fontWeight: "600" }}>
              {userDataObj.full_name}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              {userDataObj.email}
            </Text>
          </View>
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
});
