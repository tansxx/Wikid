import styled, { keyframes } from "styled-components";
import { color, font } from "@/styles/theme";

const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(-10px);
  }

  10% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  90% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(-10px);
  }
`;

export const SnackbarWrapper = styled.div`
  position: fixed;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${color("primaryGreen100")};
  border: 1px solid ${color("primaryGreen200")};
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  height: 50px;
  padding: 15px 20px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  font: ${font("textlgSemibold")};
  color: ${color("primaryGreen300")};
  animation: ${fadeInOut} 3s ease forwards;
  z-index: 9999;
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SnackbarContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: inherit;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  filter: brightness(0) saturate(100%) invert(37%) sepia(29%) saturate(1126%)
    hue-rotate(113deg) brightness(95%) contrast(90%);
`;
