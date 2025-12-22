import urls from "../constants/urls";
import { InternalAxiosRequestConfig } from "./../../node_modules/axios/index.d";
import axios from "axios";

const client = axios.create({
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  config.baseURL = await urls.BaseURL;
  return config;
});

client.interceptors.response.use(
  (response) => response,
  async (error) => {
    return Promise.reject;
  }
);

export default client;
