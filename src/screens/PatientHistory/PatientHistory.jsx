import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Platform,
  StatusBar,
  Text,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Search from "../../components/Search";
import React, { useCallback, useState } from "react";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import {
  goToDashboardScreen,
  goToReBookingScreen,
  goToSignIntScreen,
} from "../../navigations/routes";
import AppBar from "../../components/AppBar";
import HistoryCard from "./components/HistoryCard";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLOR_WHITE } from "../../utils/colors";
import { ToastMsg } from "../ToastMessage";

const PatientHistory = () => {
  const navigation = useNavigation();
  const [loader, setLoader] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [userDataObj, setUserDataObj] = useState({});
  const [keywordText, setKeywordText] = useState("");

  useFocusEffect(
    useCallback(() => {
      authUser();
    }, [])
  );

  const validate = () => {  
    if (keywordText.trim() == "") {
      ToastMsg("error", "Search field can not be empty!!", "bottom");
      return;
    }
    setLoader(true);  
    axios
    .get(
      `https://aketbd.com/medikart/api/v1/search/patient/${userDataObj.id}/${keywordText}`
    )
    .then(function (response) {
      setLoader(false);
      if (response.data.status === "success") {
        setSearchResult(response.data?.data);
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

  // Authentication
  const authUser = async () => {
    const userData = await AsyncStorage.getItem("user-data");
    const userDataObj = JSON.parse(userData);
    setUserDataObj(userDataObj[0]);

    if (!userDataObj) {
      goToSignIntScreen(navigation);
    }

  };

  const goToBookingScreen = (navigation) => {
    navigation.navigate("Booking");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* App Bar */}
      <AppBar appBarText="Patient History" routeFunc={goToDashboardScreen} />

      <ScrollView>
        {/* Search Component */}
        {/* <Search asstId={userDataObj.id}/> */}

        <View style={styles.searchStyle}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              placeholderTextColor={COLOR_WHITE}
              style={styles.searchInputStyle}
              placeholder="Search Here..."
              value={keywordText}
              onChangeText={(value) => setKeywordText(value)}
            />
            <TouchableOpacity
              style={styles.searchBtn}
              onPress={() => validate()}
            >
              <Text style={{ color: COLOR_WHITE }}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>

        {loader ? (
          <View
            style={{
              height: 100,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActivityIndicator size={"large"} color={"orange"} />
            <Text style={{ fontSize: 12, fontWeight: "700", paddingTop: 10 }}>
              Loading...
            </Text>
          </View>
        ) : searchResult.length === 0 ? (
          <View
            style={{
              flex: 1,
              height: 100,
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
        ) : (
          searchResult.map((item, index) => {
            return (
              <HistoryCard
                key={index}
                id={item.id}
                vid={item.visit_id}
                date={item.date}
                name={item.full_name}
                phone={item.mobile}
                routeFun={() => goToReBookingScreen(navigation)}
              />
            );
          })
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PatientHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  searchStyle: {
    backgroundColor: "#65ad53",
    marginVertical: 10,
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 5,
  },
  searchInputStyle: {
    flex: 1,
    height: 40,
    marginVertical: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: COLOR_WHITE,
  },
  searchBtn: {
    backgroundColor: "#246015",
    marginHorizontal: 5,
    padding: 12,
    borderRadius: 5,
  },
});
