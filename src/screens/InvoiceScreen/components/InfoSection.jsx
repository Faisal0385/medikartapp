import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  company_address,
  company_contact,
  company_name,
} from "../../../utils/string";

const infoSection = () => {
  return (
    <View>
      <Text style={styles.companyTextStyle}>{company_name}</Text>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text>{company_contact}</Text>
        <Text>{company_address}</Text>
      </View>
    </View>
  );
};

export default infoSection;

const styles = StyleSheet.create({
  companyTextStyle: {
    backgroundColor: "#eae8e8",
    padding: 5,
    marginTop: 10,
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
  },
});
