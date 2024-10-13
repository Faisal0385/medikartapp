import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Platform,
  ScrollView,
} from "react-native";
import React from "react";
import Search from "../../components/Search";
import HeadingTitle from "../../components/HeadingTitle";
import DashboardCard from "../../components/DashboardCard";
import { COLOR_WHITE } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import SubHeadingTitle from "../../components/SubHeadingTitle";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import DashboardAppBar from "./components/DashboardAppBar";
import {
  goToPatientHistoryScreen,
  goToPatientListScreen,
} from "../../navigations/routes";
import Divider from "./components/Divider";

const DashboardScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* Dashboard App Bar */}
      <DashboardAppBar />

      <ScrollView>
        <View style={{ marginHorizontal: 8 }}>
          {/* Heading Title Component */}
          <View style={{ marginVertical: 8 }}>
            <HeadingTitle title="Welcome Back" />
          </View>

          {/* Search Component */}
          <Search goto={() => goToPatientHistoryScreen(navigation)} />

          {/* Income Card  */}
          <DashboardCard
            title="Today's Income"
            amount={7000}
            bgcolor="#17B48C"
            fonticons={<FontAwesomeIcon name="dollar" size={16} />}
          />

          {/* Patient Card  */}
          <DashboardCard
            title="Today's Patient"
            amount={100}
            bgcolor="#FA4D24"
            fonticons={<FontAwesomeIcon name="users" size={16} />}
          />

          <Divider />

          {/* Sub Heading Title Component */}
          <SubHeadingTitle title="Today's Patient List" />

          {/* Patient List */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => goToPatientListScreen(navigation)}
          >
            <Text style={{ color: COLOR_WHITE }}>
              {" "}
              <FontAwesomeIcon name="user-circle" size={18} /> Show Patient List
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  button: {
    alignItems: "center",
    backgroundColor: "teal",
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
  },
});
