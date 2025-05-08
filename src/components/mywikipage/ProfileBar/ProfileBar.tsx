import WikiAvatar from "../WikiAvatar/WikiAvatar";
import ProfileForm from "../ProfileForm/ProfileForm";
import { Container, ProfileCard } from "./ProfileBar.style";
import type { ProfileFormValues } from "../ProfileForm/ProfileForm";

interface ProfileBarProps {
  isEditMode: boolean;
  user: {
    name: string;
  };
  profile: {
    city?: string;
    mbti?: string;
    job?: string;
    image?: string;
    nickname?: string;
    sns?: string;
    birthday?: string;
    bloodType?: string;
    nationality?: string;
  };
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
  return (
    <Container>
      <ProfileCard>
        <WikiAvatar
          src={profile.image || "/assets/icons/ic_profile.svg"}
          isEditMode={isEditMode}
        />
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
          onSubmit={onSaveProfile}
          onChange={onChange}
        />
      </ProfileCard>
    </Container>
  );
}
