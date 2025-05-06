import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/GlobalStyle";
import { theme } from "@/styles/theme";
import "@/styles/tailwind.css";
import Navbar from "@/components/common/NavBar/NavBar";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
