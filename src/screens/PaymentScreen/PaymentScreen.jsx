import {
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  View,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import React, { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PaymentComponent from "./components/PaymentComponent";

const PaymentScreen = () => {
  const navigation = useNavigation();
  const [userDataObj, setUserDataObj] = useState({});
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const { width } = Dimensions.get("window");

  useFocusEffect(
    useCallback(() => {
      setLoader(true);
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
    axios
      .get(
        "https://aketbd.com/medikart/api/v1/due/patient-list/" +
          userDataObj[0].id
      )
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {loader ? (
          <View
            style={{
              height: width,
              flex: 1,
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <ActivityIndicator size={"large"} color={"orange"} />
            <Text style={{ fontSize: 12, fontWeight: "700", paddingTop: 10 }}>
              Loading...
            </Text>
          </View>
        ) : data.length > 0 ? (
          data.map((item, index) => (
            <PaymentComponent key={index} data={item} />
          ))
        ) : (
          <View
            style={{
              flex: 1,
              height: width,
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
              }}
            >
              No Data Found!!
            </Text>
          </View>
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
});
