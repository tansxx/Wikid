import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000; // 어둡게 깔리는 레이어
`;

export const ModalBox = styled.div`
  position: relative;
  z-index: 1001;
  background-color: white;
  border-radius: 16px;
  padding: 24px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const TopRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const LockIconWrapper = styled.div`
  margin: 12px 0;
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #333;
`;

export const Content = styled.div`
  width: 100%;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  align-self: flex-start;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const Input = styled.input<{ $isError: boolean }>`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid ${({ $isError }) => ($isError ? "#ff5a5a" : "#ccc")};
  border-radius: 6px;
  font-size: 14px;
  outline: none;
`;

export const ErrorMessage = styled.div<{ $visible: boolean }>`
  color: #ff5a5a;
  font-size: 13px;
  margin-top: 8px;
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
`;

export const Notice = styled.p`
  font-size: 12px;
  text-align: center;
  margin-top: 20px;
  color: #777;
`;
