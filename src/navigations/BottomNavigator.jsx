import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "../screens/DashboardScreen/DashboardScreen";
import PatientInfoScreen from "../screens/PatientInfoScreen/PatientInfoScreen";
import AppointmentScreen from "../screens/AppointmentScreen/AppointmentScreen";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Patient Info" component={PatientInfoScreen} options={{ headerShown: false, tabBarLabel:"Add Patient" }}/>
      <Tab.Screen name="Appointment" component={AppointmentScreen} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
};

export default BottomNavigator;
