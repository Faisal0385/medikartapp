import MainNavigator from "./src/navigations/MainNavigator";
import { NavigationContainer } from "@react-navigation/native";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";

const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "green", marginBottom: 60, height: 60 }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        color: "green",
        fontWeight: "600",
      }}
    />
  ),

  error: (props) => (
    <ErrorToast
      {...props}
      style={{
        borderLeftColor: "red",
        marginBottom: 50,
        height: 60,
      }}
      text1Style={{
        fontSize: 14,
        fontWeight: "600",
        color: "#d10000",
      }}
      text2Style={{
        fontSize: 12,
      }}
    />
  ),
};

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
      <Toast config={toastConfig} />
    </NavigationContainer>
  );
}
