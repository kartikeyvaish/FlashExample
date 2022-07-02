// Packages imports
import { NavigationContainer } from "@react-navigation/native";

// Local Imports
import AppNavigator from "./navigation/AppNavigator";

// exporting the default component
export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
