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
}

export default function WikiAvatar({
  src,
  alt = "프로필 이미지",
  isEditMode,
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
        <HoverOverlay>
          <CameraIconWrapper>
            <CameraIcon />
          </CameraIconWrapper>
        </HoverOverlay>
      </ImageWrapper>
    </Wrapper>
  );
}
