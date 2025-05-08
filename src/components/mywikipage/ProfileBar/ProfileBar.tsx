import { useRef } from "react";
import WikiAvatar from "../WikiAvatar/WikiAvatar";
import ProfileForm from "../ProfileForm/ProfileForm";
import { Container, ProfileCard } from "./ProfileBar.style";
import type { ProfileFormValues } from "../ProfileForm/ProfileForm";
import { uploadProfileImage } from "@/apis/imageUpload";
import { useProfileImageStore } from "@/stores/useProfileImageStore";

interface ProfileBarProps {
  isEditMode: boolean;
  user: { name: string };
  profile: ProfileFormValues;
  onSaveProfile?: (data: ProfileFormValues) => void;
  onChange?: (data: ProfileFormValues) => void;
}

export default function ProfileBar({
  isEditMode,
  user,
  profile,
  onSaveProfile,
  onChange,
}: ProfileBarProps) {
  const { imageUrl, setImageUrl } = useProfileImageStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarClick = () => {
    if (isEditMode) {
      fileInputRef.current?.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const uploadedUrl = await uploadProfileImage(file);
      setImageUrl(uploadedUrl);

      // 이미지 URL을 업데이트하고 상위 컴포넌트에 변경 사항 전달
      if (onChange) {
        onChange({
          ...profile,
          image: uploadedUrl,
        });
      }
    } catch (error) {
      console.error("이미지 업로드 실패", error);
    }
  };

  return (
    <Container>
      <ProfileCard>
        <WikiAvatar
          src={imageUrl || profile.image || "/assets/icons/ic_profile.svg"}
          isEditMode={isEditMode}
          onClick={handleAvatarClick}
        />
        {isEditMode && (
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
        )}
        <ProfileForm
          isEditMode={isEditMode}
          name={user.name}
          nickname={profile.nickname}
          city={profile.city}
          mbti={profile.mbti}
          job={profile.job}
          sns={profile.sns}
          birthday={profile.birthday}
          bloodType={profile.bloodType}
          nationality={profile.nationality}
          image={profile.image || imageUrl}
          onSubmit={onSaveProfile}
          onChange={onChange}
        />
      </ProfileCard>
    </Container>
  );
}
