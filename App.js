import AppointmentScreen from "./src/screens/AppointmentScreen/AppointmentScreen";
import DashboardScreen from "./src/screens/DashboardScreen/DashboardScreen";
import BookinScreen from "./src/screens/BookingScreen/BookingScreen";
import PatientInfoScreen from "./src/screens/PatientInfoScreen/PatientInfoScreen";
import ReceiptScreen from "./src/screens/ReceiptScreen/ReceiptScreen";
import PatientListScreen from "./src/screens/PatientListScreen/PatientListScreen";
import MainNavigator from "./src/navigations/MainNavigator";
import ThankYouScreen from "./src/screens/ThankYouScreen/ThankYouScreen";

export default function App() {
  return <MainNavigator />;
}
