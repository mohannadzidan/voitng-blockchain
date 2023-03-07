import axios, { Axios } from "axios";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "https://e4b9-41-40-151-208.eu.ngrok.io"
    : "https://127.0.0.1:8000";

export const Rest = axios.create({
  baseURL: baseUrl + "/api",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

Rest.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");
  if (token) config.headers["Authorization"] = "Bearer " + token;
  return config;
});

export default baseUrl;
