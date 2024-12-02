import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AppBar from "../../components/AppBar";
import { goToDashboardScreen } from "../../navigations/routes";

const ImageUpload = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* App Bar */}
      <AppBar appBarText="Docs Upload" routeFunc={goToDashboardScreen} />
      <TouchableOpacity
        style={{
          justifyContent: "center",
          height: 50,
          backgroundColor: "red",
          margin: 10,
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Image Upload</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          justifyContent: "center",
          height: 50,
          backgroundColor: "red",
          margin: 10,
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Report Upload</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          justifyContent: "center",
          height: 50,
          backgroundColor: "red",
          margin: 10,
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>
          Prescription Upload
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ImageUpload;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
