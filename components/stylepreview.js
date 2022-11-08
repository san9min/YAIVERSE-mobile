import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

function StylePreview(props) {
  const name = props.name;
  const imageUri = props.imageUri;
  const width = parseInt(props.width / 2.5);
  const heigth = parseInt(props.width / 4);
  const BannerSet = {
    JOJO: { src: require("../assets/jojo/refer.png") },
    DISNEY: { src: require("../assets/disney/refer.jpg") },
    JINX: { src: require("../assets/jinx/refer.png") },
    ART: { src: require("../assets/art/refer.png") },
    SKETCH: { src: require("../assets/sketch/refer.png") },
    CAITLYN: { src: require("../assets/caitlyn/refer.png") },
  };
  return (
    <View style={{ width: width, margin: 12 }}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate("Detail", {
            name: name,
            imageUri: imageUri,
          });
        }}
      >
        <View>
          <Image
            source={BannerSet[name]["src"]}
            style={{
              resizeMode: "cover",
              width: "100%",
              height: heigth,
              borderRadius: 2,
            }}
          />
          <Text style={styles.styletext}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
  5;
}

export default StylePreview;

const styles = StyleSheet.create({
  styletext: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
    marginTop: 5,
  },
});
