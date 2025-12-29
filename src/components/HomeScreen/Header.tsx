import { Appbar, Avatar, TextInput } from "react-native-paper";

import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "@/src/constants/colors";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/src/interface/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store";

export default function Header() {
  const [visibleEye, setVisibleEye] = useState(true);
  const [visibleNotification, setVisibleNotification] = useState(true);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const user = useSelector((state: RootState) => state.auth.userName);

  const getInitials = (userName: string) => {
    if (!userName) return "NA";
    return userName.slice(0, 2).toUpperCase();
  };
  return (
    <View style={styles.header}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 24,
        }}
      >
        <Pressable
          onPress={() => {
            navigation.navigate("HomeStack", { screen: "Profile" });
          }}
        >
          <Avatar.Text size={54} label={getInitials(user)} />
        </Pressable>
        <View
          style={{
            paddingHorizontal: 17,
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 500, color: "white" }}>
            Welcome Back
          </Text>
          <Text style={{ fontSize: 14, fontWeight: 400, color: "white" }}>
            {user}
          </Text>
        </View>
        <Appbar.Action
          icon={visibleNotification ? "bell" : "bell-off"}
          onPress={() => setVisibleNotification(!visibleNotification)}
          color="white"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 26,
        }}
      >
        <View style={{ flex: 1, gap: 3 }}>
          <Text style={{ fontSize: 14, fontWeight: 400, color: "white" }}>
            Your Total Points
          </Text>
          <Text style={{ fontSize: 30, fontWeight: 500, color: "white" }}>
            {visibleEye ? 3000.0 : "XXXX.XX"}
          </Text>
        </View>
        <Appbar.Action
          icon={visibleEye ? "eye" : "eye-off"}
          color="white"
          onPress={() => setVisibleEye(!visibleEye)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primaryColor,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    height: 200,
    paddingHorizontal: 20,
  },
});
