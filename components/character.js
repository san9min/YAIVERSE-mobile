import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

function Character(props) {
  const character_image = props.character_image;

  return (
    <TouchableOpacity>
      <Image
        source={character_image}
        style={{
          resizeMode: "cover",
          width: 100,
          height: 100,
          borderRadius: 70,
          overflow: "hidden",
          margin: 10,
        }}
      />
    </TouchableOpacity>
  );
}

export default Character;

const styles = StyleSheet.create({
  styletext: {
    color: "white",
    fontSize: 16,
  },
});
