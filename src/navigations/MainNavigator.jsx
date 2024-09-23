import { createStackNavigator } from "@react-navigation/stack";
import BookingScreen from "../screens/BookingScreen/BookingScreen";
import ReceiptScreen from "../screens/ReceiptScreen/ReceiptScreen";
import PatientListScreen from "../screens/PatientListScreen/PatientListScreen";
import ThankYouScreen from "../screens/ThankYouScreen/ThankYouScreen";
import PatientHistory from "../screens/PatientHistory/PatientHistory";
import BottomNavBar from "../screens/BottomNavBar";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import OnBoardingScreen from "../screens/OnBoardingScreen/OnBoardingScreen";

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
      <Stack.Screen name="Booking" component={BookingScreen} />
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
      <Stack.Screen name="Patient List" component={PatientListScreen} />
      <Stack.Screen name="Patient History" component={PatientHistory} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
