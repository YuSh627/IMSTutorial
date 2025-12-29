import { Alert, StyleSheet, View } from "react-native";
import React from "react";
import { List } from "react-native-paper";
import { useDispatch } from "react-redux";
import { logout } from "@/src/store/slices/auth.slice";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/src/interface/types";

export default function SecondList() {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const logoutAlert = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "cancel", style: "cancel" },

      {
        text: "ok",
        onPress: () => {
          dispatch(logout());
          navigation.reset({
            index: 0,
            routes: [{ name: "SignIn" }],
          });
        },
      },
    ]);
  };

  return (
    <View>
      <List.Item
        title="Log out"
        left={(props) => <List.Icon {...props} icon="logout" />}
        onPress={logoutAlert}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
