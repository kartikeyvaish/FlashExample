// Packages Imports
import { View, StyleSheet, Text } from "react-native";
import { EvilIcons, AntDesign } from "@expo/vector-icons";
import FastImage from "react-native-fast-image";

// interface for TweetCard
export interface TweetCardProps {
  id: string | number;
  name: string;
  username: string;
  profile_picture: string;
  tweet: string;
  comments_count: number;
  likes_count: number;
  retweets_count: number;
  is_liked: boolean;
}

// function component for TweetCard
function TweetCard(props: TweetCardProps) {
  // Destructuring props
  const {
    profile_picture,
    name,
    comments_count,
    likes_count,
    retweets_count,
    tweet,
    username,
    is_liked,
  } = props;

  // render
  return (
    <View style={{ padding: 15, flexDirection: "row", width: "100%" }}>
      <FastImage source={{ uri: profile_picture }} style={styles.profile_picture} />

      <View style={{ flex: 1, marginLeft: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.username}>{`@${username}`}</Text>
          <View style={styles.seperator} />
          <Text style={styles.username}>2h</Text>
        </View>

        <Text style={styles.tweet}>{tweet}</Text>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonItemContainer}>
            <EvilIcons name="comment" size={24} color="black" />
            <Text style={styles.count}>{comments_count}</Text>
          </View>

          <View style={styles.buttonItemContainer}>
            <EvilIcons name="retweet" size={24} color="black" />
            <Text style={styles.count}>{retweets_count}</Text>
          </View>

          <View style={styles.buttonItemContainer}>
            <AntDesign
              name={is_liked ? "heart" : "hearto"}
              size={16}
              color={is_liked ? "red" : "black"}
            />
            <Text style={styles.count}>{likes_count}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

// exports
export default TweetCard;

// styles
const styles = StyleSheet.create({
  tweet: { fontSize: 18, marginTop: 8 },
  profile_picture: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  username: {
    fontSize: 14,
    color: "#878687",
  },
  seperator: {
    width: 2,
    height: 2,
    backgroundColor: "#878687",
    borderRadius: 100,
    marginRight: 5,
    marginLeft: 5,
  },
  count: {
    fontSize: 14,
    color: "#878687",
    marginLeft: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 50,
    marginTop: 15,
    maxWidth: "80%",
  },
  buttonItemContainer: { flexDirection: "row", alignItems: "center" },
});
