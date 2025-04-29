import { color, font } from "@/styles/theme";
import styled from "styled-components";

export const ModalBox = styled.div`
  width: 395px;
  height: 435px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${color("gray50")};
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const TopRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const LockIconWrapper = styled.div`
  margin-top: 8px;
`;

export const Description = styled.div`
  margin-top: 12px;
  color: ${color("gray400")};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`;

export const Content = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
`;
