import { useForm } from "react-hook-form";
import FormButton from "../AuthForm/FormButton";
import FormInput from "../AuthForm/FormInput";
import { createQuestionAPI } from "@/apis/authAPI";
import { useAuthStore } from "@/stores/authStore";

export default function QuestionCreateForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data: any) => {
    try {
      console.log("질문 제출됨:");
      console.log("질문:", data.question);
      console.log("답변:", data.answer);
      await createQuestionAPI({
        securityQuestion: data.question,
        securityAnswer: data.answer,
      });

      alert("질문이 성공적으로 등록되었습니다!");
      reset();
    } catch (error: any) {
      if (
        error?.response?.status === 403 ||
        error?.response?.status === 409 ||
        error?.response?.status === 400
      ) {
        alert("이미 질문이 등록되어 있습니다.");
      } else {
        console.error("질문 등록 실패:", error);
        alert("질문 등록에 실패했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col  w-full max-w-md"
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
