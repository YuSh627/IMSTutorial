import { AppRegistry, StyleSheet, Text, View } from "react-native";
import React from "react";
import SignInScreen from "./src/auth/SignInScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./src/app/Home";
import { DefaultTheme, PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";
import SignUpScreen from "./src/auth/SignUpScreen";
import SignUpChoiceScreen from "./src/auth/SignUpChoiceScreen";
import { colors } from "./src/constants/colors";

const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
    contentStyle: { backgroundColor: "white" },
  },

  screens: {
    SignIn: {
      screen: SignInScreen,
    },
    SignUp: {
      screen: SignUpScreen,
    },
    SignUpChoice: {
      screen: SignUpChoiceScreen,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation />
      </SafeAreaView>
    </PaperProvider>
  );
}
