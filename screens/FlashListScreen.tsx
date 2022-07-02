// Packages Imports
import { View, StatusBar, StyleSheet } from "react-native";
import { FlashList } from "@shopify/flash-list";

// Local Imports
import TweetCard from "../components/TweetCard";
import Tweets from "../mock/tweets.json";

// exporting the default component
export default function FlashListScreen() {
  return (
    <View style={styles.container}>
      {/* Default Status Bar  */}
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {/* FlashList Component */}
      <FlashList
        data={Tweets}
        renderItem={({ item }) => <TweetCard key={item.id.toString()} {...item} />}
        estimatedItemSize={300}
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
