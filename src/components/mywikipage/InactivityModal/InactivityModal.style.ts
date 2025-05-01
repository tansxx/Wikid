import styled from "styled-components";
import { font, color } from "@/styles/theme";

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background: ${color("gray50")};
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  padding: 40px 32px;
  z-index: 999;
  width: 100%;
  max-width: 395px;
  flex-shrink: 0;
  flex-direction: column;
`;

export const Title = styled.div`
  color: ${color("gray500")};
  font: ${font("text2lgSemibold")};
  justify-content: flex-start;
  margin-top: 30px;
`;

export const Message = styled.div`
  color: ${color("gray400")};
  font: ${font("textlgRegular")};
  justify-content: flex-start;
  margin-top: 10px;
`;

export const PrimaryButtonStyled = styled.div`
  display: inline-flex;
  height: 40px;
  padding: 11px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 33px;
`;
