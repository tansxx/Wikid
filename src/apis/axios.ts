// libs/axios.ts
import axios from "axios";
import { useAuthStore } from "@/stores/authStore";

export const axiosInstance = axios.create({
  //   baseURL: "https://wikied-api.vercel.app", //API 베이스 주소
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token; // Zustand에서 직접 가져옴
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
