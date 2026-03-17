import { HotPotApiClient } from "@hot-pot/hotpot-sdk-ts";
import axios, { type AxiosInstance } from "axios";

const getBaseURL = (): string => {
  return import.meta.env.VITE_BASE_URL;
};

const getApiKey = (): string => {
  return import.meta.env.VITE_APP_API_KEY || "";
};

const axiosClient: AxiosInstance = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "x-api-key": getApiKey(),
  },
});

export const hotpotApiClient: HotPotApiClient = new HotPotApiClient(
  getBaseURL(),
  getApiKey(),
  axiosClient,
);
