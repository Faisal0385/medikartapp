import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBarStyle}>
        <Text style={styles.headerTextStyle}>Profile Screen</Text>
      </View>
      <ScrollView>
        <View style={{ alignItems: "center", padding: 20 }}>
          <Image
            source={require("../../../assets/icon.png")}
            style={styles.profileImage}
          />
          <Text>Faisal A. Salam</Text>
          <Text>faisal@gmail.com</Text>
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
