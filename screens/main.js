import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  LogBox,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons";

LogBox.ignoreLogs(["Sending"]); //navigation에서 경고 계속있는데 해결 못해서 우선 ignore

export default function MainScreen(props) {
  const windowWidth = Dimensions.get("window").width;
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image
          style={styles.bannerImage}
          source={require("../assets/logo.png")}
        />
      </View>

      <View style={styles.start}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("Start");
          }}
          style={styles.startButton}
        >
          <LinearGradient
            colors={["#546DF2", "#A154F2"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
          >
            <Text style={styles.startText}>START</Text>
            {/* <AntDesign
              name="right"
              size={24}
              color="white"
              style={styles.navigationgoicon}
            /> */}
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(18,18,18)",
  },
  banner: {
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
  },

  start: {
    flex: 1,
  },
  bannerImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  bannertext: {
    color: "white",
    fontSize: 24,
    fontWeight: 600,
    position: "absolute",
    bottom: 0,
  },
  startButton: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    width: 180,
    height: 60,
    margin: 2,
    borderRadius: 24,
  },
  startText: {
    color: "white",
    fontWeight: "normal",
    fontSize: 24,
  },
  navigationgoicon: {
    position: "absolute",
    right: 20,
  },
});
