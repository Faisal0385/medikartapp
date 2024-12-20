import { createStackNavigator } from "@react-navigation/stack";
import BookingScreen from "../screens/BookingScreen/BookingScreen";
import ReceiptScreen from "../screens/ReceiptScreen/ReceiptScreen";
import PatientListScreen from "../screens/PatientListScreen/PatientListScreen";
import ThankYouScreen from "../screens/ThankYouScreen/ThankYouScreen";
import PatientHistory from "../screens/PatientHistory/PatientHistory";
import BottomNavBar from "../screens/BottomNavBar";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import PaymentScreen from "../screens/PaymentScreen/PaymentScreen";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import OnBoardingScreenOne from "../screens/OnBoardingScreen/OnBoardingScreenOne";
import OnBoardingScreenTwo from "../screens/OnBoardingScreen/OnBoardingScreenTwo";
import OnBoardingScreenThree from "../screens/OnBoardingScreen/OnBoardingScreenThree";
import SignInScreen from "../screens/Auth/SignInScreen/SignInScreen";
import ForgotPasswordScreen from "../screens/Auth/ForgotPasswordScreen/ForgotPasswordScreen";
import OTPScreen from "../screens/Auth/OTPScreen/OTPScreen";
import ResetPassword from "../screens/Auth/ResetPassword/ResetPassword";
import { ReBookingScreen } from "../screens";
import InvoiceScreen from "../screens/InvoiceScreen/InvoiceScreen";
import ImageUpload from "../screens/ImageUpload/ImageUpload";
import VenueScreen from "../screens/VenueScreen/VenueScreen";
import VenueWiseReport from "../screens/VenueWiseReport/VenueWiseReport";
import UploadImageScreen from "../screens/UploadImageScreen/UploadImageScreen";
import UploadFormScreen from "../screens/UploadFormScreen/UploadFormScreen";

const Stack = createStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Upload Docs"
        component={UploadImageScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Upload Form"
        component={UploadFormScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Image Upload"
        component={ImageUpload}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Bottom Navbar"
        component={BottomNavBar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Venuewise Report Screen"
        component={VenueWiseReport}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Venue Screen"
        component={VenueScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Splash Screen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="Bottom Navbar"
        component={BottomNavBar}
        options={{ headerShown: false }}
      /> */}

      <Stack.Screen
        name="Receipt"
        component={ReceiptScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Invoice Screen"
        component={InvoiceScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PatientHistory"
        component={PatientHistory}
        options={{
          headerShown: false,
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
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PatientList"
        component={PatientListScreen}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnboardingOne"
        component={OnBoardingScreenOne}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnboardingTwo"
        component={OnBoardingScreenTwo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OnboardingThree"
        component={OnBoardingScreenThree}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OTP Screen"
        component={OTPScreen}
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
        name="Rebooking"
        component={ReBookingScreen}
        options={{
          headerShown: false,
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Thanks"
        component={ThankYouScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigator;
