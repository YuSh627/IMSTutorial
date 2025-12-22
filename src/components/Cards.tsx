import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface CardsProps {
  cardsColor: string;
  cardsName: string;
}

export default function Cards({ cardsColor, cardsName }: CardsProps) {
  return (
    <View style={[styles.cards, { backgroundColor: cardsColor }]}>
      <Text>{cardsName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cards: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    width: "auto",
    backgroundColor: "red",
  },
});
