import {
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import HeadingTitle from "../../components/HeadingTitle";
import { COLOR_WHITE } from "../../utils/colors";
import Search from "../../components/Search";
import { useNavigation } from "@react-navigation/native";

const PaymentScreen = () => {
  const navigation = useNavigation();

  const goToPaymentScreen = () => {
    navigation.navigate("Receipt");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <HeadingTitle title="Payment List" />
      </View>

      {/* Search Component */}
      <View style={{ margin: 10 }}>
        <Search />
      </View>

      <ScrollView>
        <View style={[styles.card, styles.shadowProp]}>
          <View style={{ padding: 10 }}>
            <Text
              style={{
                backgroundColor: "#eae8e8",
                padding: 10,
                marginVertical: 5,
              }}
            >
              <Text style={{ fontWeight: "700" }}>Name: </Text> Jon Doe
            </Text>

            <Text
              style={{
                backgroundColor: "#eae8e8",
                padding: 10,
                marginVertical: 5,
              }}
            >
              <Text style={{ fontWeight: "700" }}>Phone: </Text>01325234556
            </Text>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.button}
                onPress={goToPaymentScreen}
              >
                <Text style={{ color: COLOR_WHITE }}>Payment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={[styles.card, styles.shadowProp]}>
          <View style={{ padding: 10 }}>
            <Text
              style={{
                backgroundColor: "#eae8e8",
                padding: 10,
                marginVertical: 5,
              }}
            >
              <Text style={{ fontWeight: "700" }}>Name: </Text> Jon Doe
            </Text>

            <Text
              style={{
                backgroundColor: "#eae8e8",
                padding: 10,
                marginVertical: 5,
              }}
            >
              <Text style={{ fontWeight: "700" }}>Phone: </Text>01325234556
            </Text>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.button}
                onPress={goToPaymentScreen}
              >
                <Text style={{ color: COLOR_WHITE }}>Payment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={[styles.card, styles.shadowProp]}>
          <View style={{ padding: 10 }}>
            <Text
              style={{
                backgroundColor: "#eae8e8",
                padding: 10,
                marginVertical: 5,
              }}
            >
              <Text style={{ fontWeight: "700" }}>Name: </Text> Jon Doe
            </Text>

            <Text
              style={{
                backgroundColor: "#eae8e8",
                padding: 10,
                marginVertical: 5,
              }}
            >
              <Text style={{ fontWeight: "700" }}>Phone: </Text>01325234556
            </Text>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.button}
                onPress={goToPaymentScreen}
              >
                <Text style={{ color: COLOR_WHITE }}>Payment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={[styles.card, styles.shadowProp]}>
          <View style={{ padding: 10 }}>
            <Text
              style={{
                backgroundColor: "#eae8e8",
                padding: 10,
                marginVertical: 5,
              }}
            >
              <Text style={{ fontWeight: "700" }}>Name: </Text> Jon Doe
            </Text>

            <Text
              style={{
                backgroundColor: "#eae8e8",
                padding: 10,
                marginVertical: 5,
              }}
            >
              <Text style={{ fontWeight: "700" }}>Phone: </Text>01325234556
            </Text>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                style={styles.button}
                onPress={goToPaymentScreen}
              >
                <Text style={{ color: COLOR_WHITE }}>Payment</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingHorizontal: 20,
    margin: 5,
  },
  input: {
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#eae8e8",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    margin: 14,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  button: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FA4D24",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 5,
  },
});
