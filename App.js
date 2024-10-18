import MainNavigator from "./src/navigations/MainNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { Platform, StatusBar } from "react-native";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

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
        marginTop: Platform.OS == "android" ? StatusBar.currentHeight + 5 : 30,
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
  const [fontsLoaded] = useFonts({
    montBold: require("./assets/fonts/Montserrat-Bold.ttf"),
    montExtraBold: require("./assets/fonts/Montserrat-ExtraBold.ttf"),
    montLight: require("./assets/fonts/Montserrat-Light.ttf"),
    montRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
    montSemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),

    poppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    poppinsExtraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    poppinsLight: require("./assets/fonts/Poppins-Light.ttf"),
    poppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    poppinsSemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <NavigationContainer>
      <MainNavigator />
      <Toast config={toastConfig} />
    </NavigationContainer>
  );
}
