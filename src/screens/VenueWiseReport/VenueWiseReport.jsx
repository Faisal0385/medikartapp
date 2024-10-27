import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { goToDashboardScreen } from "../../navigations/routes";
import AppBar from "../../components/AppBar";
import Divider from "../../components/Divider";
import Daily from "./components/Daily";
import Monthly from "./components/Monthly";
import Yearly from "./components/Yearly";

const VenueWiseReport = () => {
  const [tab, setTab] = useState(2);

  return (
    <SafeAreaView>
      {/* App Bar */}
      <AppBar appBarText="Report Screen" routeFunc={goToDashboardScreen} />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <Text style={{ fontSize: 20 }}>Venue 1</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={()=>setTab(1)}
          style={{
            flex: 1,
            backgroundColor: "green",
            margin: 5,
            padding: 10,
            borderRadius: 5,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 14, color: "white" }}>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>setTab(2)}
          style={{
            flex: 1,
            backgroundColor: "green",
            margin: 5,
            padding: 10,
            borderRadius: 5,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 14, color: "white" }}>Monthly</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>setTab(3)}
          style={{
            flex: 1,
            backgroundColor: "green",
            margin: 5,
            padding: 10,
            borderRadius: 5,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 14, color: "white" }}>Yearly</Text>
        </TouchableOpacity>
      </View>
      <Divider />

      {tab === 1 ? <Daily /> : ""}
      {tab === 2 ? <Monthly /> : ""}
      {tab === 3 ? <Yearly /> : ""}
    </SafeAreaView>
  );
};

export default VenueWiseReport;

const styles = StyleSheet.create({});
