import React from "react";
import styled from "styled-components";
import "@/styles/GlobalStyle.ts";
import { font, color } from "@/styles/theme";

/* 피그마에 나와 있는 색상과 폰트는 이런 식으로 사용하시면 됩니다! */
const Title = styled.h1`
  ${font("text3xlBold")}
  color: ${color("primaryGreen200")};
  margin-top: 40px;
  text-align: center;
`;

export default function Home() {
  return <Title>Wikid!</Title>;
}
