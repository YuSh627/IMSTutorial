import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import React, { useRef, useState } from "react";
import { Button, HelperText, Text, TextInput } from "react-native-paper";
import { Controller, useForm } from "react-hook-form";
import { TextInput as RNTextInput } from "react-native";
import { colors } from "../constants/colors";
import { Link } from "@react-navigation/native";
import { mainStyles } from "../styles/Main";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmpassword, setHideConfirmpassword] = useState(true);

  const emailInputRef = useRef<RNTextInput>(null);
  const passwordInputRef = useRef<RNTextInput>(null);
  const confirmpasswordInputRef = useRef<RNTextInput>(null);

  const onSubmit = () => {
    console.log("submitted");
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Text variant="displaySmall" style={mainStyles.title}>
          Sign up
        </Text>
        {/* USERNAME */}
        <Controller
          name="userName"
          control={control}
          rules={{ required: "User name is required" }}
          render={({ field: { onChange, value, onBlur } }) => (
            <View>
              <TextInput
                mode="outlined"
                label="Username"
                outlineStyle={styles.textField}
                outlineColor={colors.textField.outlineColor}
                textColor={colors.textColor.primary}
                activeOutlineColor={colors.primaryColor}
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
                error={!!errors.userName}
                returnKeyType="next"
                onSubmitEditing={() => emailInputRef.current?.focus()}
                style={styles.textField}
              />
              {!!errors.userName && (
                <HelperText type="error" visible={!!errors.userName}>
                  {errors.userName?.message}
                </HelperText>
              )}
            </View>
          )}
        />
        {/* EMAIL */}
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <View>
              <TextInput
                mode="outlined"
                label="Email"
                ref={emailInputRef}
                outlineStyle={styles.textField}
                outlineColor={colors.textField.outlineColor}
                textColor={colors.textColor.primary}
                activeOutlineColor={colors.primaryColor}
                onChangeText={onChange}
                value={value}
                onSubmitEditing={() => passwordInputRef.current?.focus()}
                error={!!errors.email}
                returnKeyType="next"
                style={styles.textField}
              />
              {!!errors.email && (
                <HelperText type="error" visible={!!errors.email}>
                  {errors.email?.message}
                </HelperText>
              )}
            </View>
          )}
        />
        {/* PASSWORD */}
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                "Password must include upper, lower, number, and special character",
            },
          }}
          render={({ field: { onChange, value, onBlur } }) => (
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
                outlineStyle={styles.textField}
                outlineColor={colors.textField.outlineColor}
                textColor={colors.textColor.primary}
                activeOutlineColor={colors.primaryColor}
                style={styles.textField}
                onChangeText={onChange}
                value={value}
                onSubmitEditing={() => confirmpasswordInputRef.current?.focus()}
                onBlur={onBlur}
                returnKeyType="next"
                error={!!errors.password}
              />
              {!!errors.password && (
                <HelperText type="error" visible={!!errors.password}>
                  {errors.password?.message}
                </HelperText>
              )}
            </View>
          )}
        />
        {/* CONFIRM PASSWORD */}
        <Controller
          name="confirmPassword"
          control={control}
          rules={{
            required: "Please confirm your password",
            validate: (value) =>
              value === watch("password") || "Password do not match",
          }}
          render={({ field: { onChange, value, onBlur } }) => (
            <View>
              <TextInput
                mode="outlined"
                label="Confirm Password"
                ref={confirmpasswordInputRef}
                secureTextEntry={hideConfirmpassword}
                right={
                  <TextInput.Icon
                    icon={hideConfirmpassword ? "eye-off" : "eye"}
                    onPress={() => setHideConfirmpassword(!hideConfirmpassword)}
                  />
                }
                outlineStyle={styles.textField}
                outlineColor={colors.textField.outlineColor}
                textColor={colors.textColor.primary}
                activeOutlineColor={colors.primaryColor}
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
                returnKeyType="done"
                error={!!errors.confirmPassword}
                style={styles.textField}
                onSubmitEditing={handleSubmit(onSubmit)}
              />
              {!!errors.confirmPassword && (
                <HelperText type="error" visible={!!errors.confirmPassword}>
                  {errors.confirmPassword?.message}
                </HelperText>
              )}
            </View>
          )}
        />

        <Button
          mode="contained"
          buttonColor={colors.primaryColor}
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          Sign Up
        </Button>
        <View style={styles.signInRedirect}>
          <Text style={{ color: colors.textColor.primary }}>
            Already have an account?
          </Text>
          <Link
            params={{}}
            screen="SignIn"
            style={{ fontWeight: "bold", color: colors.primaryColor }}
          >
            Sign In
          </Link>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    gap: 10,
  },
  textField: {
    borderRadius: 15,
  },
  button: {
    borderRadius: 15,
    height: 48,
    justifyContent: "center",
    fontWeight: "bold",
    marginTop: 8,
  },
  signInRedirect: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
  },
});
