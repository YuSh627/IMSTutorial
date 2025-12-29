import { NavigatorScreenParams } from "@react-navigation/native";

export interface SignInTypes {
  userName: string;
  password: string;
}

export type HomeStackParamList = {
  Home: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
  SignUpChoice: undefined;
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
};
