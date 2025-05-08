import { useForm, Controller, useWatch } from "react-hook-form";
import { useEffect } from "react";
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
  onSubmit?: (data: ProfileFormValues) => void;
  onChange?: (data: ProfileFormValues) => void;
}

export interface ProfileFormValues {
  nickname: string;
  city: string;
  mbti: string;
  job: string;
  sns: string;
  birthday: string;
  bloodType: string;
  nationality: string;
  onSubmit?: (data: ProfileFormValues) => void;
  onChange?: (data: ProfileFormValues) => void;
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
  onChange,
  onSubmit,
}: ProfileFormProps) {
  const { control, handleSubmit, watch } = useForm<ProfileFormValues>({
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

  useEffect(() => {
    const subscription = watch((value) => {
      onChange?.(value as ProfileFormValues);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <FormWrapper as="form" onSubmit={handleSubmit((data) => onSubmit?.(data))}>
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
