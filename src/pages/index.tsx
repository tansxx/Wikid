import React from "react";
import styled from "styled-components";
import "@/styles/GlobalStyle.ts";
import { font, color } from "@/styles/theme";

const Title = styled.h1`
  ${font("text3xlBold")}
  color: ${color("primaryGreen200")};
  margin-top: 40px;
  text-align: center;
`;

export default function Home() {
  return <Title>Wikid!</Title>;
}
