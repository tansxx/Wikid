// libs/axios.ts
import axios from "axios";
import { useAuthStore } from "@/stores/authStore";

const instance = axios.create({
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token; // Zustand에서 직접 가져옴
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
