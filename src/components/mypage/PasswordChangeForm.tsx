// src/components/mypage/PasswordChangeForm.tsx

import { useForm } from "react-hook-form";
import { changePasswordAPI } from "@/apis/authAPI";
import FormButton from "../AuthForm/FormButton";
import FormInput from "../AuthForm/FormInput";
import { useRouter } from "next/router";

export default function PasswordChangeForm() {
  const {
    handleSubmit,
    formState: { errors },
    watch,
    register,
  } = useForm({
    mode: "onBlur",
  });

  const router = useRouter();

  const onChangePassword = async (data: any) => {
    try {
      const response = await changePasswordAPI({
        currentPassword: data.currentPassword,
        password: data.password,
        passwordConfirmation: data.passwordConfirmation,
      });
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onChangePassword)}
      className="flex flex-col w-full max-w-md"
    >
      <h3 className="text-textmdRegular text-gray500">비밀번호 변경</h3>

      <FormInput
        id="currentPassword"
        placeholder="기존 비밀번호"
        type="password"
        register={register("currentPassword", {
          required: "기존 비밀번호를 입력해 주세요",
          minLength: {
            value: 8,
            message: "8자 이상 입력해 주세요",
          },
        })}
        error={errors.currentPassword}
      />

      <FormInput
        id="password"
        placeholder="새 비밀번호"
        type="password"
        register={register("password", {
          required: "새 비밀번호를 입력해 주세요",
          minLength: {
            value: 8,
            message: "8자 이상 입력해 주세요",
          },
        })}
        error={errors.password}
      />

      <FormInput
        id="passwordConfirmation"
        placeholder="새 비밀번호 확인"
        type="password"
        register={register("passwordConfirmation", {
          required: "비밀번호 확인은 필수입니다.",
          minLength: {
            value: 8,
            message: "8자 이상 입력해 주세요",
          },
          validate: (value) =>
            value === watch("password") || "비밀번호가 일치하지 않습니다.",
        })}
        error={errors.passwordConfirmation}
      />

      <FormButton
        type="submit"
        className="mt-2 bg-primaryGreen200 hover:bg-primaryGreen300 rounded-[7px] text-gray50 text-[14px] font-normal leading-[40px] w-20 ml-auto"
      >
        변경하기
      </FormButton>
    </form>
  );
}
