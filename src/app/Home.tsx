import { ScrollView, StyleSheet, Text, View } from "react-native";

import Cards from "../components/Cards";

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
      <View style={styles.cardsContainer}>
        <Cards cardsColor="blue" cardsName="blue" />
        <Cards cardsColor="green" cardsName="" />
        <Cards cardsColor="red" cardsName="" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {},
});
