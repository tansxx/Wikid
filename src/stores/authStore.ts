import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  isLoggedIn: boolean;
  accessToken: string | null;
  isInitialized: boolean;
  login: () => void;
  logout: () => void;
  setAccessToken: (token: string) => void;
  setInitialized: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  accessToken: null,
  isInitialized: true,
  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false, accessToken: null }),
  setAccessToken: (token) => set({ accessToken: token }),
  setInitialized: (value) => set({ isInitialized: value }),
}));
