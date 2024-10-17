import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Platform,
  StatusBar,
  Text,
  ActivityIndicator,
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
  goToSignIntScreen,
} from "../../navigations/routes";
import AppBar from "../../components/AppBar";
import HistoryCard from "./components/HistoryCard";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PatientHistory = () => {
  const navigation = useNavigation();
  const [loader, setLoader] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  useFocusEffect(
    useCallback(() => {
      setLoader(true);
      authUser();
    }, [])
  );

  const route = useRoute();
  const asstId = route.params?.asstId;
  const keywordText = route.params?.keywordText;

  // Authentication
  const authUser = async () => {
    const userData = await AsyncStorage.getItem("user-data");
    const userDataObj = JSON.parse(userData);

    if (!userDataObj) {
      goToSignIntScreen(navigation);
    } else {
      axios
        .get(
          `https://aketbd.com/medikart/api/v1/search/patient/${asstId}/${keywordText}`
        )
        .then(function (response) {
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
        <View style={{ paddingHorizontal: 10 }}>
          <Search />
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
                vid={item.visit_id}
                date={item.date}
                name={item.full_name}
                phone={item.mobile}
                routeFun={() => goToBookingScreen(navigation)}
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
});
