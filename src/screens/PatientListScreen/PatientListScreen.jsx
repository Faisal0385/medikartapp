import {
  StatusBar,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useState } from "react";
import HeadingTitle from "../../components/HeadingTitle";
import { goToDashboardScreen } from "../../navigations/routes";
import AppBar from "../../components/AppBar";
import Divider from "../../components/Divider";
import DateCountComponent from "./components/DateCountComponent";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import DashboardCard from "../../components/DashboardCard";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import { company_name } from "../../utils/string";

const PatientListScreen = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get("window");
  const [loader, setLoader] = useState(false);
  const [userDataObj, setUserDataObj] = useState({});
  const [paidData, setPaidData] = useState([]);
  const [total, setTotal] = useState([]);

  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = date + "-" + month + "-" + year;

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
        "https://aketbd.com/medikart/api/v1/paid/patient-list/" +
          userDataObj[0].id
      )
      .then(function (response) {
        if (response.data.status === "success") {
          setPaidData(response.data?.data);
          setTotal(response.data?.total);
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
      {/* App Bar */}
      <AppBar
        appBarText="Today's Patient List"
        routeFunc={goToDashboardScreen}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ margin: 10 }}>
          {/* Heading Title Component */}
          <View
            style={{
              marginVertical: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <HeadingTitle title={company_name} size={22} />
          </View>

          {/* Date Count Component */}
          <DateCountComponent date={currentDate} />

          {/* Income Card  */}
          <DashboardCard
            title="Today's Income"
            amount={total ?? 0}
            count={paidData.length ?? 0}
            bgcolor="#FA4D24"
            fonticons={<FontAwesomeIcon name="user" size={16} />}
          />

          {/* Divider */}
          <Divider />

          {/* Paid Data List */}
          {loader ? (
            <View
              style={{
                flex: 1,
                height: width,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ActivityIndicator color={"orange"} />
              <Text style={{ fontSize: 12, fontWeight: "700", paddingTop: 10 }}>
                Loading...
              </Text>
            </View>
          ) : paidData.length > 0 ? (
            paidData.map((item) => {
              return (
                <View
                  key={item.id}
                  style={{
                    backgroundColor: "#17B48C",
                    marginVertical: 8,
                    padding: 20,
                    borderRadius: 5,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ color: "white" }}>{item.full_name}</Text>
                    <Text style={{ color: "white" }}>
                      {item.payment_amount} BDT
                    </Text>
                  </View>
                  <View
                    style={{
                      height: 3,
                      marginVertical: 10,
                      backgroundColor: "white",
                    }}
                  ></View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ color: "white" }}>
                      Status: {item.payment_status}
                    </Text>
                    <Text style={{ color: "white" }}>TIme: {item.time}</Text>
                  </View>
                </View>
              );
            })
          ) : (
            <View
              style={{
                flex: 1,
                height: 200,
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PatientListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingTop: Platform.OS === "android" ? 10 : 0,
  },
});
