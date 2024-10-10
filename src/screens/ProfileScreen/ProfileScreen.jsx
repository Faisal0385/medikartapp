import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import AppBar from "../../components/AppBar";
import { goToDashboardScreen } from "../../navigations/routes";

const ProfileScreen = () => {
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
              Faisal A. Salam
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              faisal@gmail.com
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
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
