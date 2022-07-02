// Packages imports
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screen Imports
import FlatListScreen from "../screens/FlatListScreen";
import FlashListScreen from "../screens/FlashListScreen";
import HomeScreen from "../screens/HomeScreen";

// Native Stack
const Stack = createNativeStackNavigator();

// function component for AppNavigator
function AppNavigator(props) {
  // Destructuring props
  const {} = props;

  // render
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="FlashListScreen" component={FlashListScreen} />
      <Stack.Screen name="FlatListScreen" component={FlatListScreen} />
    </Stack.Navigator>
  );
}

// exports
export default AppNavigator;
