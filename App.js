import MainNavigator from "./src/navigations/MainNavigator";
import { NavigationContainer } from "@react-navigation/native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
