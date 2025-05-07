import styled from "styled-components";

export const BarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  padding: 8px;
  margin-bottom: 8px;
`;

export const LeftLabel = styled.span`
  font-weight: bold;
`;

export const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ControlGroup = styled.div`
  display: flex;
  gap: 4px;
`;

export const Divider = styled.div`
  width: 1px;
  height: 20px;
  background-color: #ddd;
  margin: 0 8px;
`;

export const HeadingSelect = styled.select`
  border: 1px solid #ccc;
  background: white;
  font-size: 14px;
`;

export const ControlButton = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ $active }) => ($active ? "black" : "#bbb")};
`;
