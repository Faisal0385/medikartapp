import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "../screens/DashboardScreen/DashboardScreen";
import PatientInfoScreen from "../screens/PatientInfoScreen/PatientInfoScreen";
import AppointmentScreen from "../screens/others/AppointmentScreen/AppointmentScreen";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6"
import PaymentScreen from "../screens/PaymentScreen/PaymentScreen";
import BookingScreen from "../screens/BookingScreen/BookingScreen";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#FA4D24",
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon name="user-plus" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="money-check-dollar" color={color} size={20} />
          ),
        }}
        
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
