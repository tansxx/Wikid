import Image from "next/image";
import {
  Wrapper,
  ImageWrapper,
  StyledImage,
  HoverOverlay,
  CameraIconWrapper,
} from "./WIkiAvatar.styles";
import CameraIcon from "@/assets/icons/ic_camera.svg";

interface WikiAvatarProps {
  src: string;
  alt?: string;
  isEditMode: boolean;
  onClick?: () => void;
}

export default function WikiAvatar({
  src,
  alt = "프로필 이미지",
  isEditMode,
  onClick,
}: WikiAvatarProps) {
  return (
    <Wrapper>
      <ImageWrapper $isEditMode={isEditMode}>
        <StyledImage
          src={src}
          alt={alt}
          width={200}
          height={200}
          $isEditMode={isEditMode}
        />
        {isEditMode && (
          <HoverOverlay onClick={onClick}>
            <CameraIconWrapper>
              <CameraIcon />
            </CameraIconWrapper>
          </HoverOverlay>
        )}
      </ImageWrapper>
    </Wrapper>
  );
}
