import {
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLOR_WHITE } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import axios from "axios";

const PaymentComponent = ({ data, callApi }) => {
  const navigation = useNavigation();

  const [loader, setLoader] = useState(false);
  const [payment, setPayment] = useState(null);

  const goToPaymentScreen = (bid) => {
    if (payment === null) {
      Toast.show({
        type: "error",
        text1: "Payment can not be empty!!",
        position: "bottom",
        visibilityTime: 2000,
        bottomOffset: 100,
      });
      return;
    }
    axios
      .post("https://aketbd.com/medikart/api/v1/doctor/booking-payment", {
        booking_id: bid,
        payment_amount: payment,
      })
      .then(function (response) {
        setLoader(false);
        if (response.data.status == "success") {
          setPayment("");
          Toast.show({
            type: "success",
            text1: response.data.message,
            position: "bottom",
            visibilityTime: 2000,
            bottomOffset: 100,
          });
          callApi();
          navigation.navigate("Receipt");
        } else if (response.data.status == "error") {
          Toast.show({
            type: "error",
            text1: response.data.message,
            position: "bottom",
            visibilityTime: 2000,
            bottomOffset: 100,
          });
        }
      })
      .catch(function (error) {
        setLoader(false);
        if (error.status == 500) {
          Toast.show({
            type: "error",
            text1: "Somthing went wrong!!",
            text2: "Try agian!!",
            position: "bottom",
            visibilityTime: 2000,
            bottomOffset: 100,
          });
        }
      });
  };
  return (
    <View style={[styles.card, styles.shadowProp]}>
      <View style={{ padding: 10 }}>
        <Text
          style={{
            backgroundColor: "#eae8e8",
            padding: 10,
            marginVertical: 5,
          }}
        >
          <Text style={{ fontWeight: "700" }}>Serial No: </Text> 22
        </Text>
        <Text
          style={{
            backgroundColor: "#eae8e8",
            padding: 10,
            marginVertical: 5,
          }}
        >
          <Text style={{ fontWeight: "700" }}>Name: {data.full_name}</Text>
        </Text>

        <Text
          style={{
            backgroundColor: "#eae8e8",
            padding: 10,
            marginVertical: 5,
          }}
        >
          <Text style={{ fontWeight: "700" }}>Phone: </Text>
          {data.mobile}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Payment"
          keyboardType="numeric"
          onChangeText={(value) => setPayment(value)}
        />

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => goToPaymentScreen(data.id)}
          >
            <Text style={{ color: COLOR_WHITE }}>Payment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const PaymentScreen = () => {
  const [loader, setLoader] = useState(true);
  const [reloader, setReloader] = useState(false);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    apiCall();
    setRefreshing(false);
  }, []);

  const [data, setData] = useState([]);
  const apiCall = () => {
    axios
      .get("https://aketbd.com/medikart/api/v1/due/patient-list/1")
      .then(function (response) {
        if (response.data.status === "success") {
          setData(response.data?.data);
          setLoader(false);
        }
      })
      .catch(function (error) {
        setLoader(false);
        if (error.status == 500) {
          Toast.show({
            type: "error",
            text1: "Somthing went wrong!!",
            text2: "Try agian!!",
            position: "bottom",
            visibilityTime: 2000,
            bottomOffset: 100,
          });
        }
      });
  };

  const callApi = () => {
    apiCall();
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {loader ? (
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 100,
            }}
          >
            <ActivityIndicator size={"large"} color={"orange"} />
          </View>
        ) : data.length != 0 ? (
          data.map((item, index) => <PaymentComponent  key={index} data={item} callApi={callApi} />)
        ) : (
          <Text style={{ textAlign: "center", margin: 20, fontSize: 30 }}>
            No Data Found!!
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
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
    padding: 5,
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
    marginVertical: 3,
    marginHorizontal: 5,
  },
});
