import { Image, StyleSheet, View, Dimensions } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

const { width } = Dimensions.get("window");
const imageWidth = (width - 56) / 2;

export default function NewlyIn() {
  return (
    <View style={styles.container}>
      <Text variant="titleMedium">NewlyIn</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/coffeeToGo.png")}
          resizeMode="cover"
        />
        <Image
          style={styles.image}
          source={require("../../../assets/images/sweetSensation.png")}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    gap: 16,
  },
  imageContainer: {
    flexDirection: "row",
    gap: 16,
  },
  image: {
    width: imageWidth,
    height: imageWidth * (244 / 178),
    borderRadius: 8,
  },
});
