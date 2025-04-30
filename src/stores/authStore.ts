import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  isLoggedIn: boolean;
  token: string | null;
  isInitialized: boolean;
  login: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      token: null,
      isInitialized: false,
      login: (token) => {
        set({ isLoggedIn: true, token });
      },
      logout: () => {
        set({ isLoggedIn: false, token: null });
      },
    }),
    {
      name: "auth-storage",
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.isInitialized = true;
        }
      },
    }
  )
);
