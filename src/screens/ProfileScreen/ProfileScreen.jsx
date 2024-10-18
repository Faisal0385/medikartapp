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
import {
  goToDashboardScreen,
  goToSignIntScreen,
} from "../../navigations/routes";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FontAwesome6Icon from "react-native-vector-icons/FontAwesome6";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { COLOR_WHITE } from "../../utils/colors";
import { authToaster } from "../ToastMessage";
import { company_contact, company_name, contact } from "../../utils/string";
import InfoDisplay from "./components/InfoValue";

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
      authToaster("error", "Logout Successful...", "See You Soon!!", "bottom");
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
          <Text style={styles.comapnyStyle}>{company_name}</Text>
          <Text style={styles.contactStyle}>{company_contact}</Text>

          <View style={styles.cardStyle("#17B48C")}>
            <InfoDisplay
              infoValue={userDataObj.full_name}
              fontIcon={<FontAwesome6Icon name="user" size={16} />}
            />
            <InfoDisplay
              infoValue={userDataObj.email}
              fontIcon={<MaterialIcons name="mark-email-read" size={16} />}
            />
            <InfoDisplay
              infoValue={userDataObj.hotline}
              fontIcon={<FontAwesome6Icon name="phone" size={16} />}
            />
            <InfoDisplay
              infoValue={userDataObj.address}
              fontIcon={<FontAwesome name="address-card" size={16} />}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={() => logoutBtn()}>
            <Text style={{ color: COLOR_WHITE, fontFamily: "montSemiBold" }}>
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
  contactStyle: { fontSize: 18, fontFamily: "montSemiBold", marginTop: 5 },
  comapnyStyle: {
    paddingTop: 10,
    fontFamily: "montBold",
    fontSize: 22,
    fontWeight: "600",
  },
});
