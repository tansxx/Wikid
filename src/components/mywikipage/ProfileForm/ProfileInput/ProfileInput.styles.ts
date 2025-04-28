import styled from "styled-components";
import "@/styles/GlobalStyle.ts";
import { font, color } from "@/styles/theme";

interface InputProps {
  $isEditMode: boolean;
}

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 9px 9px;
  width: 100%;
`;

export const Label = styled.label`
  flex-shrink: 0;
  width: 60px;
  ${font("textmdRegular")}
  color: ${color("gray400")};
`;

export const Input = styled.input<InputProps>`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 8px 20px;
  align-items: center;
  border-radius: 10px;
  background: ${({ $isEditMode }) => ($isEditMode ? "#f7f7fa" : "transparent")};
  outline: none;

  ${({ $isEditMode }) =>
    $isEditMode &&
    `
      &: focus {
        border: 1px solid ${color("gray200")};
        background: ${color("gray100")};
      }
    `}
`;
