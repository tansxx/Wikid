import styled from "styled-components";

export const BarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 8px 12px;
  margin-bottom: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
`;

export const LeftLabel = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: #333;
`;

export const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ControlGroup = styled.div`
  display: flex;
  gap: 2px;
`;

export const Divider = styled.div`
  width: 1px;
  height: 24px;
  background-color: #e0e0e0;
  margin: 0 4px;
`;

export const HeadingSelect = styled.select`
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background: white;
  font-size: 14px;
  padding: 3px 6px;
  color: #333;
  cursor: pointer;
  outline: none;

  &:focus {
    border-color: #4dabf7;
    box-shadow: 0 0 0 2px rgba(77, 171, 247, 0.2);
  }
`;

export const ControlButton = styled.button<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 5px;
  background: ${({ $active }) => ($active ? "#e6f4ff" : "transparent")};
  border: ${({ $active }) =>
    $active ? "1px solid #a5d8ff" : "1px solid transparent"};
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  color: ${({ $active, disabled }) => {
    if (disabled) return "#cccccc";
    return $active ? "#1890ff" : "#666666";
  }};
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: ${({ $active }) => ($active ? "#e6f4ff" : "#f0f0f0")};
    border-color: ${({ $active }) => ($active ? "#a5d8ff" : "#e0e0e0")};
  }

  &:disabled {
    opacity: 0.6;
  }
`;
