import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import FormButton from "../AuthForm/FormButton";
import FormInput from "../AuthForm/FormInput";
import { createQuestionAPI } from "@/apis/authAPI";

export default function QuestionCreateForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      const res = await createQuestionAPI({
        securityQuestion: data.question,
        securityAnswer: data.answer,
      });

      const code = res?.data?.code;

      if (code) {
        reset();
        router.push(`/wiki/${code}`);
      } else {
        console.error("서버 응답에 code가 없습니다:", res?.data);
      }
    } catch (error: any) {
      if (
        error?.response?.status === 403 ||
        error?.response?.status === 409 ||
        error?.response?.status === 400
      ) {
        console.warn("유효성 오류 발생:", error.response.data);
      } else {
        console.error("질문 등록 실패:", error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full max-w-md"
    >
      <h3 className="text-textmdRegular text-gray500">위키 생성하기</h3>

      <FormInput
        id="question"
        placeholder="질문을 입력해 주세요"
        register={register("question", { required: "질문을 입력해 주세요" })}
        error={errors.question}
      />

      <FormInput
        id="answer"
        placeholder="답을 입력해 주세요"
        register={register("answer", { required: "답을 입력해 주세요" })}
        error={errors.answer}
      />

      <FormButton
        type="submit"
        className="mt-2 bg-primaryGreen200 hover:bg-primaryGreen300 rounded-[7px] text-gray50 text-[14px] font-normal leading-[40px] w-20 ml-auto"
      >
        생성하기
      </FormButton>
    </form>
  );
}
