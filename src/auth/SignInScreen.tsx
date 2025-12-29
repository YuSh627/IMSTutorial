import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import {
  Button,
  Checkbox,
  HelperText,
  Text,
  TextInput,
} from "react-native-paper";
import React, { useRef, useState } from "react";
import { TextInput as RNTextInput } from "react-native";
import { Assets } from "@/assets/images";
import { colors } from "../constants/colors";
import { Link, useNavigation, NavigationProp } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { login } from "../axios/auth.service";
import { RootStackParamList, SignInTypes } from "../interface/types";
import { SafeAreaView } from "react-native-safe-area-context";
import { mainStyles } from "../styles/Main";
import { setToken, setUser } from "../store/slices/auth.slice";
import { useDispatch } from "react-redux";

export default function SignInScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInTypes>({
    defaultValues: {
      userName: "",
      password: "",
    },
  });
  const passwordInputRef = useRef<RNTextInput>(null);

  const [checked, setChecked] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const onSubmit = async (data: SignInTypes) => {
    const res = await login(data.userName, data.password);

    if (
      res.result &&
      typeof res.result === "object" &&
      "token" in res.result &&
      res.result.token
    ) {
      if (res.result?.token?.length > 0) {
        dispatch(setToken(res.result.token));
        dispatch(setUser(data.userName));
        navigation.navigate("HomeStack", {
          screen: "Home",
        });
      } else {
        console.log("no token found");
      }
    } else {
      console.log("unexpected error");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <ImageBackground
        style={styles.backgroundImage}
        source={Assets.loginBackground}
        resizeMode="cover"
      >
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Text variant="displaySmall" style={mainStyles.title}>
            Sign In
          </Text>

          {/* USER NAME */}
          <Controller
            name="userName"
            control={control}
            rules={{ required: "Username is required" }}
            render={({ field: { onBlur, onChange, value } }) => (
              <View>
                <TextInput
                  mode="outlined"
                  label="Username"
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  outlineStyle={styles.textField}
                  outlineColor={colors.textField.outlineColor}
                  textColor={colors.textColor.primary}
                  activeOutlineColor={colors.primaryColor}
                  onSubmitEditing={() => passwordInputRef.current?.focus()}
                  returnKeyType="next"
                  style={styles.textField}
                  error={!!errors.userName}
                />
                {!!errors.userName && (
                  <HelperText type="error">
                    {errors.userName.message}
                  </HelperText>
                )}
              </View>
            )}
          />

          {/* PASSWORD      */}
          <Controller
            name="password"
            control={control}
            rules={{
              required: "Password is required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must include upper, lower, number, and special character",
              },
            }}
            render={({ field: { onBlur, onChange, value } }) => (
              <View>
                <TextInput
                  mode="outlined"
                  label="Password"
                  ref={passwordInputRef}
                  secureTextEntry={hidePassword}
                  right={
                    <TextInput.Icon
                      icon={hidePassword ? "eye-off" : "eye"}
                      onPress={() => setHidePassword(!hidePassword)}
                    />
                  }
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  outlineStyle={styles.textField}
                  outlineColor={colors.textField.outlineColor}
                  textColor={colors.textColor.primary}
                  activeOutlineColor={colors.primaryColor}
                  onSubmitEditing={handleSubmit(onSubmit)}
                  returnKeyLabel="done"
                  style={styles.textField}
                  error={!!errors.password}
                />
                {!!errors.password && (
                  <HelperText type="error">
                    {errors.password?.message}
                  </HelperText>
                )}
              </View>
            )}
          />

          <View style={styles.label}>
            <View style={styles.checkBox}>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => {
                  setChecked(!checked);
                }}
                color={colors.primaryColor}
              />
              <Text style={{ color: colors.textColor.primary }}>
                Remember me
              </Text>
            </View>

            <Text style={{ color: colors.primaryColor }}>Forget Password?</Text>
          </View>
          <Button
            mode="contained"
            buttonColor={colors.primaryColor}
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
          >
            Sign In
          </Button>
          <View style={styles.signUpRedirect}>
            <Text style={{ color: colors.textColor.primary }}>
              Don't have an accout?
            </Text>
            <Link
              params={{}}
              screen="SignUpChoice"
              style={{ fontWeight: "bold", color: colors.primaryColor }}
            >
              Sign Up
            </Link>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 10,
    paddingHorizontal: 30,
    paddingBottom: 35,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  textField: {
    backgroundColor: "white",
    borderRadius: 15,
  },
  label: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  checkBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    borderRadius: 15,
    height: 48,
    justifyContent: "center",
    fontWeight: "bold",
  },
  signUpRedirect: {
    flexDirection: "row",
    justifyContent: "center",
    gap: "4",
  },
});
