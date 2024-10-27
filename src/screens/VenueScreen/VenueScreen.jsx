import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import FontAwesome6Icon from "react-native-vector-icons/FontAwesome6";
import AppBar from "../../components/AppBar";
import {
  goToDashboardScreen,
  goToVenuewiseScreen,
} from "../../navigations/routes";
import { useNavigation } from "@react-navigation/native";

const VenueScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* App Bar */}
        <AppBar appBarText="Venue Screen" routeFunc={goToDashboardScreen} />
        <TouchableOpacity
          onPress={() => goToVenuewiseScreen(navigation)}
          style={{
            backgroundColor: "lightgreen",
            margin: 10,
            padding: 10,
            borderRadius: 5,
            height: 50,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18 }}>Venue 1</Text>
            <FontAwesome6Icon name="circle-arrow-right" size={14} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "lightblue",
            margin: 10,
            padding: 10,
            borderRadius: 5,
            height: 50,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18 }}>Venue 2</Text>
            <FontAwesome6Icon name="circle-arrow-right" size={14} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "lightgreen",
            margin: 10,
            padding: 10,
            borderRadius: 5,
            height: 50,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18 }}>Venue 3</Text>
            <FontAwesome6Icon name="circle-arrow-right" size={14} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VenueScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
