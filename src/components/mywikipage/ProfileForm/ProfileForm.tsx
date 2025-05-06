import { useForm, Controller } from "react-hook-form";
import ProfileInput from "@/components/myWikiPage/ProfileForm/ProfileInput/ProfileInput";
import { FormWrapper } from "./ProfileForm.style";

interface ProfileFormProps {
  isEditMode: boolean;
  name: string;
  nickname?: string;
  city?: string;
  mbti?: string;
  job?: string;
  sns?: string;
  birthday?: string;
  bloodType?: string;
  nationality?: string;
}

interface ProfileFormValues {
  nickname: string;
  city: string;
  mbti: string;
  job: string;
  sns: string;
  birthday: string;
  bloodType: string;
  nationality: string;
}

export default function ProfileForm({
  isEditMode,
  nickname = "",
  city = "",
  mbti = "",
  job = "",
  sns = "",
  birthday = "",
  bloodType = "",
  nationality = "",
}: ProfileFormProps) {
  const { control } = useForm<ProfileFormValues>({
    defaultValues: {
      nickname,
      city,
      mbti,
      job,
      sns,
      birthday,
      bloodType,
      nationality,
    },
  });

  return (
    <FormWrapper>
      <Controller
        name="city"
        control={control}
        render={({ field }) => (
          <ProfileInput
            label="거주 도시"
            {...field}
            disabled={!isEditMode}
            isEditMode={isEditMode}
          />
        )}
      />
      <Controller
        name="mbti"
        control={control}
        render={({ field }) => (
          <ProfileInput
            label="MBTI"
            {...field}
            disabled={!isEditMode}
            isEditMode={isEditMode}
          />
        )}
      />
      <Controller
        name="job"
        control={control}
        render={({ field }) => (
          <ProfileInput
            label="직업"
            {...field}
            disabled={!isEditMode}
            isEditMode={isEditMode}
          />
        )}
      />
      <Controller
        name="sns"
        control={control}
        render={({ field }) => (
          <ProfileInput
            label="SNS 계정"
            {...field}
            disabled={!isEditMode}
            isEditMode={isEditMode}
          />
        )}
      />
      <Controller
        name="birthday"
        control={control}
        render={({ field }) => (
          <ProfileInput
            label="생일"
            {...field}
            type="date"
            disabled={!isEditMode}
            isEditMode={isEditMode}
          />
        )}
      />
      <Controller
        name="nickname"
        control={control}
        render={({ field }) => (
          <ProfileInput
            label="별명"
            {...field}
            disabled={!isEditMode}
            isEditMode={isEditMode}
          />
        )}
      />
      <Controller
        name="bloodType"
        control={control}
        render={({ field }) => (
          <ProfileInput
            label="혈액형"
            {...field}
            disabled={!isEditMode}
            isEditMode={isEditMode}
          />
        )}
      />
      <Controller
        name="nationality"
        control={control}
        render={({ field }) => (
          <ProfileInput
            label="국적"
            {...field}
            disabled={!isEditMode}
            isEditMode={isEditMode}
          />
        )}
      />
    </FormWrapper>
  );
}
