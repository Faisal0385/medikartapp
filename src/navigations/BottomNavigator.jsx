import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "../screens/DashboardScreen/DashboardScreen";
import PatientInfoScreen from "../screens/PatientInfoScreen/PatientInfoScreen";
import AppointmentScreen from "../screens/AppointmentScreen/AppointmentScreen";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

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
            <FontAwesomeIcon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Patient Info"
        component={PatientInfoScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon name="user-plus" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Appointment"
        component={AppointmentScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon name="address-book" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
