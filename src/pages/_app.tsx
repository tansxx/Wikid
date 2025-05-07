import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/GlobalStyle";
import { theme } from "@/styles/theme";
import "@/styles/tailwind.css";
import Navbar from "@/components/common/NavBar/NavBar";
import { Footer } from "@/components/myWikiPage/InactivityModal/InactivityModal.style";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
