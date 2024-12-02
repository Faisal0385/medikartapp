import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AppBar from "../../components/AppBar";
import {
  goToDashboardScreen,
  goToUploadFormScreen,
} from "../../navigations/routes";
import { useNavigation } from "@react-navigation/native";

const UploadImageScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <AppBar
        appBarText={"Upload Docs"}
        routeFunc={() => goToDashboardScreen(navigation)}
      />
      <View style={{ margin: 10 }}>
        <TouchableOpacity
          onPress={() => goToUploadFormScreen(navigation)}
          style={{
            height: 100,
            marginBottom: 10,
            backgroundColor: "coral",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 16, color: "white" }}>Image Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 100,
            marginBottom: 10,
            backgroundColor: "coral",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 16, color: "white" }}>
            Presciptions Upload
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 100,
            marginBottom: 10,
            backgroundColor: "coral",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 16, color: "white" }}>Report Upload</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UploadImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
