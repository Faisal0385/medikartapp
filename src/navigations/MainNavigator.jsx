import { createStackNavigator } from "@react-navigation/stack";
import DashboardScreen from "../screens/DashboardScreen/DashboardScreen";
import PatientInfoScreen from "../screens/PatientInfoScreen/PatientInfoScreen";
import AppointmentScreen from "../screens/AppointmentScreen/AppointmentScreen";
import BookingScreen from "../screens/BookingScreen/BookingScreen";
import { NavigationContainer } from "@react-navigation/native";
import ReceiptScreen from "../screens/ReceiptScreen/ReceiptScreen";
import PatientListScreen from "../screens/PatientListScreen/PatientListScreen";
import ThankYouScreen from "../screens/ThankYouScreen/ThankYouScreen";
import PatientHistory from "../screens/PatientHistory/PatientHistory";

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Patient Info" component={PatientInfoScreen} />
        <Stack.Screen name="Appointment" component={AppointmentScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="Receipt" component={ReceiptScreen} />
        <Stack.Screen name="Patient List" component={PatientListScreen} />
        <Stack.Screen name="Thanks" component={ThankYouScreen} />
        <Stack.Screen name="Patient History" component={PatientHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
