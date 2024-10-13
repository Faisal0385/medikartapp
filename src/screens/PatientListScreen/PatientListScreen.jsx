import {
  StatusBar,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import HeadingTitle from "../../components/HeadingTitle";
import Search from "../../components/Search";
import { goToDashboardScreen } from "../../navigations/routes";
import AppBar from "../../components/AppBar";
import { paidData } from "../../data/data";
import PaymentCard from "./components/PaymentCard";
import Divider from "../../components/Divider";
import DateCountComponent from "./components/DateCountComponent";

const PatientListScreen = () => {
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
          <View style={{ marginVertical: 5 }}>
            <HeadingTitle title="Zyona Laser & Skin Care" />
          </View>

          {/* Search Component */}
          <Search />

          {/* Date Count Component */}
          <DateCountComponent date="12-08-2024" count={100} />

          {/* Divider */}
          <Divider />

          {/* Paid Data List */}
          {paidData.map((item) => {
            return (
              <PaymentCard
                id={item.id}
                name={item.name}
                fee={item.fee}
                status={item.status}
                time={item.time}
              />
            );
          })}
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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
