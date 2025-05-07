import WikiAvatar from "../WikiAvatar/WikiAvatar";
import ProfileForm from "../ProfileForm/ProfileForm";
import { Container, ProfileCard } from "../ProfileBar/ProfileBar.style";

interface ProfileBarProps {
  isEditMode: boolean;
}

export default function ProfileBar({ isEditMode }: ProfileBarProps) {
  return (
    <Container>
      <ProfileCard>
        <WikiAvatar
          src="/assets/images/img_profile.png"
          isEditMode={isEditMode}
        />
        <ProfileForm isEditMode={isEditMode} />
      </ProfileCard>
    </Container>
  );
}
