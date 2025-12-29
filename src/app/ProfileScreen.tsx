import { StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Button, List, Text } from "react-native-paper";

import HeaderPs from "../components/HomeScreen/ProfileScreen/HeaderPs";
import SecondList from "../components/HomeScreen/ProfileScreen/SecondList";

export default function ProfileScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <HeaderPs />
        <SecondList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
