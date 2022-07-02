// Packages Imports
import { View, StyleSheet, StatusBar, Pressable, Text } from "react-native";

// function component for HomeScreen
function HomeScreen(props: any) {
  // Destructuring props
  const { navigation } = props;

  // render
  return (
    <View style={styles.container}>
      {/* Default Status Bar  */}
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      <Pressable style={styles.menuContainer} onPress={() => navigation.navigate("FlatListScreen")}>
        <Text style={styles.menuTitle}>FlatList Example 😢</Text>
      </Pressable>

      <Pressable
        style={styles.menuContainer}
        onPress={() => navigation.navigate("FlashListScreen")}
      >
        <Text style={styles.menuTitle}>FlashList Example ♥</Text>
      </Pressable>
    </View>
  );
}

// exports
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  menuTitle: {
    fontSize: 20,
  },
  menuContainer: {
    padding: 20,
    borderRadius: 100,
    margin: 20,
    borderWidth: 1,
    borderColor: "black",
  },
});
