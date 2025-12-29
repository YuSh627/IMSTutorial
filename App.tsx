import React from "react";
import SignInScreen from "./src/auth/SignInScreen";
import { PaperProvider } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStaticNavigation } from "@react-navigation/native";
import SignUpScreen from "./src/auth/SignUpScreen";
import SignUpChoiceScreen from "./src/auth/SignUpChoiceScreen";
import HomeScreen from "./src/app/HomeScreen";
import { Provider as StoreProvider } from "react-redux";
import store from "./src/store";
import ProfileScreen from "./src/app/ProfileScreen";

const HomeStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
    contentStyle: { backgroundColor: "white" },
  },

  screens: {
    Home: {
      screen: HomeScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
  },
});

const RootStack = createNativeStackNavigator({
  screenOptions: {
    headerShown: false,
    contentStyle: { backgroundColor: "white" },
  },

  initialRouteName: "SignIn",

  screens: {
    SignUp: {
      screen: SignUpScreen,
    },
    SignIn: {
      screen: SignInScreen,
    },

    SignUpChoice: {
      screen: SignUpChoiceScreen,
    },

    HomeStack: {
      screen: HomeStack,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </StoreProvider>
  );
}
