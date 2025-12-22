import client from "./index";
import { LoginResponse } from "../interface/auth";
import urls from "../constants/urls";

export const login = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const res = await client.post(urls.login, { username, password });
    if (
      res.data.isSuccess === false ||
      !res.data ||
      res.data.status === "error"
    ) {
      return {
        status: "error",
        result: "Invalid username || password",
        message: "Invalid username || password",
      };
    }
    return res.data as LoginResponse;
  } catch (e: any) {
    return {
      status: "error",
      result: "Invalid username || password",
      message: "Invalid username || password",
    };
  }
};
