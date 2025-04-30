import { color, font } from "@/styles/theme";
import styled from "styled-components";
import PrimaryButton from "@/components/PrimaryButton";

export const ModalBox = styled.div`
  width: 100%;
  max-width: 395px;
  flex-shrink: 0;
  border-radius: 10px;
  background: ${color("gray50")};
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
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
  width: 42px;
  height: 42px;
  background-color: ${color("gray100")};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

export const Description = styled.div`
  margin-top: 10px;
  color: ${color("gray400")};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
`;

export const Content = styled.div`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 24px;
`;

export const FormWrapper = styled.div`
  width: 100%;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: #3b3b3b;
  text-align: left;
  margin-bottom: 8px;
`;

export const Input = styled.input<{ $isError?: boolean }>`
  display: flex;
  width: 355px;
  padding: 14px 20px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: ${({ $isError }) => ($isError ? "#fbeded" : "#f7f7fa")};
  transition: box-shadow 0.2s ease;

  box-shadow: ${({ $isError }) => ($isError ? "0 0 0 2px #D14343" : "none")};

  &:focus {
    outline: none;
    box-shadow: ${({ $isError }) =>
      $isError ? "0 0 0 2px #D14343" : "0 0 0 2px #cdeae3"};
  }

  &::placeholder {
    color: ${color("gray400")};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &:-webkit-autofill {
    box-shadow: 0 0 0px 1000px
      ${({ $isError }) => ($isError ? "#FBEDED" : "#f7f7fa")} inset;
    -webkit-text-fill-color: #333;
  }
`;

export const ErrorMessage = styled.div<{ $visible?: boolean }>`
  width: 100%;
  max-width: 355px;
  margin-top: 8px;
  margin-bottom: 20px;
  font-size: 12px;
  font-weight: 400px;
  color: ${color("secondaryRed200")};
  text-align: left;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.3s ease;
  pointer-events: none;
`;

export const PrimaryButtonStyled = styled(PrimaryButton)`
  width: 100%;
  max-width: 355px;
`;

export const Notice = styled.div`
  color: ${color("gray400")};
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 30px;
`;
