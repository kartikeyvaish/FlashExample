// Packages Imports
import { View, StatusBar, StyleSheet, FlatList } from "react-native";

// Local Imports
import TweetCard from "../components/TweetCard";
import Tweets from "../mock/tweets.json";

// exporting the default component
export default function FlatListScreen() {
  return (
    <View style={styles.container}>
      {/* Default Status Bar  */}
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {/* FlashList Component */}
      <FlatList
        data={Tweets}
        renderItem={({ item }) => <TweetCard key={item.id.toString()} {...item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
