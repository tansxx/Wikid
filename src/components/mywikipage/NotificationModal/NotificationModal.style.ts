import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: flex;
  padding: 24px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 10px;
  border: 1px solid #cvc9cf;
  background: #ced8d5;
  box-shadow: 0px 2px 8px 0px rgba(120, 116, 134, 0.25);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const span = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  color: #1b1b1b;
`;

export const CloseButtonStyled = styled.div`
  width: 24px;
  height: 24px;
  color: black;
`;

export const NotificationList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const NotificationItem = styled.div`
  display: flex;
  width: 100%;
  max-width: 328px;
  align-items: center;
  gap: 4px;
`;
