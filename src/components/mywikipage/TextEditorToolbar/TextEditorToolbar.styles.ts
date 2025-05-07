import styled from "styled-components";
import { color, font } from "@/styles/theme";

export const BarWrapper = styled.div`
  width: 100%;
  max-width: 1120px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: ${color("gray100")};
  border-radius: 10px;
  font: ${font("textxlSemibold")};
  color: ${color("gray500")};
`;

export const LeftLabel = styled.span`
  margin-left: 20px;
  margin-right: 200px;
  font-weight: bold;
`;

export const RightControls = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const ControlGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ControlButton = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ active }) =>
    active ? "#C6CADA !important" : "transparent"};
  color: ${({ active }) => (active ? "#fff" : "#444")};
  border: none;
  padding: 6px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #ccc;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const HeadingSelect = styled.select`
  height: 32px;
  padding: 0 10px;
  border: none;
  border-radius: 6px;
  background-color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }

  option {
    font-size: 14px;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 20px;
  background-color: ${color("gray200")};
  margin: 0 4px;
`;
