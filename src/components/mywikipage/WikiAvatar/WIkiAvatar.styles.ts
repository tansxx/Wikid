import styled, { css } from "styled-components";
import Image from "next/image";
import { color } from "@/styles/theme";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div<{ $isEditMode: boolean }>`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  cursor: ${({ $isEditMode }) => ($isEditMode ? "pointer" : "default")};

  ${({ $isEditMode }) =>
    $isEditMode &&
    css`
      &:hover div {
        opacity: 1;
      }
    `}
`;

export const StyledImage = styled(Image)<{ $isEditMode: boolean }>`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease, filter 0.3s ease;

  ${({ $isEditMode }) =>
    $isEditMode &&
    css`
      ${ImageWrapper}:hover & {
        transform: scale(1.05);
        filter: blur(2px);
      }
    `}
`;

export const HoverOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
`;

export const CameraIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  transition: transform 0.3s ease;

  svg {
    width: 100%;
    height: 100%;
  }
  color: ${color("gray50")};

  ${ImageWrapper}:hover & {
    transform: scale(1.2);
  }
`;
