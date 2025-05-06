import styled from "styled-components";

export const ModalContainer = styled.div`
  background: #f6fdf7;
  border-radius: 12px;
  padding: 24px 24px 16px;
  width: 360px;
  max-height: 80vh;
  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
`;

export const Tabs = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

export const Tab = styled.button<{ active: boolean }>`
  border: none;
  background: none;
  font-weight: ${({ active }) => (active ? "700" : "400")};
  color: ${({ active }) => (active ? "#000" : "#888")};
  font-size: 14px;
  cursor: pointer;
`;

export const NotificationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const NotificationItem = styled.div<{ read: boolean }>`
  position; relative;
  background: white;
  border-radius: 10px;
  padding: 16px 16px 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
`;

export const ItemText = styled.div`
  font-size: 15px;
  color: #222;
  margin-bottom: 4px;
`;

export const ItemTime = styled.div`
  font-size: 12px;
  color: #999;
`;

export const DeleteButton = styled.button`
  position: absolute;
  right: 12px;
  top: 10px;
  font-size; 14px;
  border: none;
  background: none;
  color: #999;
  cursor: pointer;
  `;

export const UnreadDot = styled.span`
  position: absolute;
  left: 10px;
  top: 14px;
  width: 8px;
  height: 8px;
  background-color: #2d8cf0;
  border-radius: 50%;
`;
