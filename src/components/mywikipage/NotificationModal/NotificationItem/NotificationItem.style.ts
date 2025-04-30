import styled from "styled-components";
import { color } from "@/styles/theme";

export const ItemWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 328px;
  padding: 16px 12px;
  align-items: flex-start;
  gap: 4px;
  border-radius: 5px;
  border: 1px solid ${color("primaryGreen100")};
  background: ${color("gray50")};
`;

export const Dot = styled.div`
  width: 5px;
  height: 5px;
  flex-shrink: 0;
  margin-top: 4px;
  flex-shrink: 0;
`;

export const Content = styled.div`
  flex: 1;
`;

export const Message = styled.div`
  color: #1b1b1b;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  margin: 0;
`;

export const Time = styled.div`
  color: #a4a1aa;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  margin: 6px 0 0;
`;

export const DeleteBtnWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
`;
