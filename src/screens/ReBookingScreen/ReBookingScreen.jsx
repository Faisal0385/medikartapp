import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { authToaster } from "../ToastMessage";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EditPatientInfo from "./components/EditPatientInfo";
import { goToSignIntScreen } from "../../navigations/routes";

const ReBookingScreen = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState(true);
  const [loader, setLoader] = useState(false);
  const [userDataObj, setUserDataObj] = useState({});

  useFocusEffect(
    useCallback(() => {
      setLoader(true);
      getData(params?.id);
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
  };

  const getData = async (id) => {
    axios
      .get(`https://aketbd.com/medikart/api/v1/patient/data/${id}`)
      .then(function (response) {
        if (response.data.status == "success") {
          setLoader(false);
          setUserInfo(response?.data.data);
        } else {
          setLoader(false);
          authToaster(
            "error",
            "Somthing went wrong!!",
            "Try agian!!",
            "bottom"
          );
        }
      })
      .catch(function (error) {
        setLoader(false);
        if (error.status == 500) {
          authToaster(
            "error",
            "Somthing went wrong!!",
            "Try agian!!",
            "bottom"
          );
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : ""}
      >
        <ScrollView>
          {loader ? (
            <ActivityIndicator size="large" color={"green"} />
          ) : userInfo ? (
            <View style={[styles.card, styles.shadowProp]}>
              <EditPatientInfo userInfo={userInfo} asstID={userDataObj.id} />
            </View>
          ) : (
            <Text>No Data</Text>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ReBookingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight - 10 : 0,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 5,
    margin: 12,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#17B48C",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 10,
  },
});
