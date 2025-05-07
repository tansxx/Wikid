import WikiAvatar from "../WikiAvatar/WikiAvatar";
import ProfileForm from "../ProfileForm/ProfileForm";
import { Container, ProfileCard } from "./ProfileBar.style";

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
  };
}

export default function ProfileBar({
  isEditMode,
  user,
  profile,
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
        />
      </ProfileCard>
    </Container>
  );
}
