import { useState } from "react";
import ProfileInput from "@/components/mywikipage/ProfileForm/ProfileInput/ProfileInput";
import { FormWrapper } from "../ProfileForm/ProfileForm.style";

interface ProfileFormProps {
  isEditMode: boolean;
}

export default function ProfileForm({ isEditMode }: ProfileFormProps) {
  const [city, setCity] = useState("");
  const [mbti, setMbti] = useState("");
  const [job, setJob] = useState("");
  const [sns, setSns] = useState("");
  const [birthday, setBirthday] = useState("");
  const [nickname, setNickname] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [nationality, setNationality] = useState("");

  return (
    <FormWrapper>
      <ProfileInput
        label="거주 도시"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        disabled={!isEditMode}
        isEditMode={isEditMode}
      />
      <ProfileInput
        label="MBTI"
        value={mbti}
        onChange={(e) => setMbti(e.target.value)}
        disabled={!isEditMode}
        isEditMode={isEditMode}
      />
      <ProfileInput
        label="직업"
        value={job}
        onChange={(e) => setJob(e.target.value)}
        disabled={!isEditMode}
        isEditMode={isEditMode}
      />
      <ProfileInput
        label="SNS 계정"
        value={sns}
        onChange={(e) => setSns(e.target.value)}
        disabled={!isEditMode}
        isEditMode={isEditMode}
      />
      <ProfileInput
        label="생일"
        value={birthday}
        onChange={(e) => setBirthday(e.target.value)}
        disabled={!isEditMode}
        isEditMode={isEditMode}
      />
      <ProfileInput
        label="별명"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        disabled={!isEditMode}
        isEditMode={isEditMode}
      />
      <ProfileInput
        label="혈액형"
        value={bloodType}
        onChange={(e) => setBloodType(e.target.value)}
        disabled={!isEditMode}
        isEditMode={isEditMode}
      />
      <ProfileInput
        label="국적"
        value={nationality}
        onChange={(e) => setNationality(e.target.value)}
        disabled={!isEditMode}
        isEditMode={isEditMode}
      />
    </FormWrapper>
  );
}
