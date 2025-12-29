import { StyleSheet, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store";
import { Avatar, Text } from "react-native-paper";

export default function HeaderPs() {
  const user = useSelector((state: RootState) => state.auth.userName);

  const getInitials = (userName: string) => {
    if (!userName) return "NA";
    return userName.slice(0, 2).toUpperCase();
  };
  return (
    <View style={styles.container}>
      <Avatar.Text size={75} label={getInitials(user)} />
      <View
        style={{
          paddingHorizontal: 17,
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: 500 }}>{user}</Text>
        <Text variant="bodyMedium">Welcome Back</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
