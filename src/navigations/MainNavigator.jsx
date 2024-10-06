import { createStackNavigator } from "@react-navigation/stack";
import BookingScreen from "../screens/BookingScreen/BookingScreen";
import ReceiptScreen from "../screens/ReceiptScreen/ReceiptScreen";
import PatientListScreen from "../screens/PatientListScreen/PatientListScreen";
import ThankYouScreen from "../screens/ThankYouScreen/ThankYouScreen";
import PatientHistory from "../screens/PatientHistory/PatientHistory";
import BottomNavBar from "../screens/BottomNavBar";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import OnBoardingScreen from "../screens/OnBoardingScreen/OnBoardingScreen";
import PaymentScreen from "../screens/PaymentScreen/PaymentScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator>
      
      <Stack.Screen
        name="Splash Screen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Onboarding"
        component={OnBoardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Bottom Navbar"
        component={BottomNavBar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Receipt"
        component={ReceiptScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Thanks"
        component={ThankYouScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          headerBackTitleVisible: false,
        }}
      />

      <Stack.Screen
        name="Patient History"
        component={PatientHistory}
        options={{
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Patient List"
        component={PatientListScreen}
        options={{
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigator;
