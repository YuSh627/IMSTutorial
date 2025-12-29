import client from "./index";
import urls from "../constants/urls";
import { SearchProductResponse } from "../interface/apiTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { InternalAxiosRequestConfig } from "axios";

export const productInfo = async (
  pageNo: string
): Promise<SearchProductResponse> => {
  try {
    const res = await client.get<SearchProductResponse>(urls.productSearch, {
      params: { pageNo: pageNo, pageSize: "10", filterObject: "product" },
    });
    return res.data as SearchProductResponse;
  } catch (e: any) {
    return {
      status: "error",
      message: "Invalid username || password",
    };
  }
};
