import { StyleSheet, View, Image } from "react-native";
import React, { useState } from "react";
import { Button, Portal, Snackbar, Text } from "react-native-paper";
import { Assets } from "@/assets/images";
import { colors } from "../constants/colors";
import { Link, useNavigation } from "@react-navigation/native";
import { mainStyles } from "../styles/Main";

export default function SignUpChoiceScreen() {
  const navigation = useNavigation<any>();
  const [googleSigninVisible, setGoogleSigninVisible] = useState(false);
  const [emailSigninVisible, setEmailSigninVisible] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerLink}>
        <Link params={{}} screen="SignIn" style={{ color: "black" }}>
          Sign in
        </Link>
      </View>
      <View style={styles.container}>
        <View style={{ alignItems: "center", gap: 25 }}>
          <Image source={Assets.logo} />
          <Text style={mainStyles.title} variant="displaySmall">
            Sign up or Sign in using your Account
          </Text>
        </View>

        <View style={{ alignItems: "center", gap: 25 }}>
          <View style={{ gap: 14, width: "100%" }}>
            <Button
              icon="google"
              textColor="black"
              mode="outlined"
              style={styles.button1}
              onPress={() => setGoogleSigninVisible(true)}
            >
              Continue with Google
            </Button>
            <Portal>
              <Snackbar
                visible={googleSigninVisible}
                onDismiss={() => setGoogleSigninVisible(false)}
                action={{
                  label: "close",
                }}
              >
                google
              </Snackbar>
            </Portal>

            <Button
              icon="email"
              textColor="black"
              mode="outlined"
              style={styles.button1}
              onPress={() => setEmailSigninVisible(true)}
            >
              Continue with email
            </Button>
            <Portal>
              <Snackbar
                visible={emailSigninVisible}
                onDismiss={() => setEmailSigninVisible(false)}
                action={{
                  label: "close",
                }}
              >
                Email
              </Snackbar>
            </Portal>
          </View>

          <Text style={{ color: colors.textColor.primary }}>OR</Text>
          <Button
            mode="contained"
            buttonColor={colors.primaryColor}
            style={styles.button2}
            onPress={() => navigation.navigate("SignUp")}
          >
            Sign Up
          </Button>
          <Text
            style={{ textAlign: "center", color: colors.textColor.primary }}
          >
            By continuing with sign up, you agree to our{" "}
            <Text style={styles.link}>Privacy Policy</Text> ,{" "}
            <Text style={styles.link}>Cookie Policy</Text> and{" "}
            <Text style={styles.link}>Member Agreement</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, padding: 30 },
  headerLink: {
    alignItems: "flex-end",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 80,
  },
  button1: {
    borderRadius: 100,
    height: 48,
    justifyContent: "center",
    fontWeight: "bold",
    borderColor: colors.textField.outlineColor,
  },
  button2: {
    borderRadius: 15,
    height: 48,
    width: "100%",
    justifyContent: "center",
    fontWeight: "bold",
  },
  link: {
    color: colors.primaryColor,
    textDecorationLine: "underline",
  },
});
