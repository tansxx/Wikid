import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/GlobalStyle";
import { theme } from "@/styles/theme";
import "@/styles/tailwind.css";
import Navbar from "@/components/common/NavBar/NavBar";
import { useAuthStore } from "@/stores/authStore";
import axios from "@/apis/axiosInstance";

export default function MyApp({ Component, pageProps }: AppProps) {
  const { login, logout, setInitialized } = useAuthStore();

  useEffect(() => {
    const tryAutoLogin = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        logout();
        setInitialized(true);
        return;
      }

      try {
        await axios.get("/users/me");
        login();
      } catch (e) {
        logout();
      } finally {
        setInitialized(true);
      }
    };

    tryAutoLogin();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
