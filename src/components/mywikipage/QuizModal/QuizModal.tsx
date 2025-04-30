import { FC, useState } from "react";
import CloseButton from "@/components/common/CloseButton";
import PrimaryButton from "@/components/common/PrimaryButton";
import Toast from "@/components/common/Toast";
import Image from "next/image";
import {
  ModalBox,
  Header,
  TopRow,
  LockIconWrapper,
  Description,
  Content,
  FormWrapper,
  Label,
  Input,
  ErrorMessage,
  Notice,
} from "../QuizModal/QuizModal.style";

type ModalProps = {
  onClose: () => void;
  onConfirm: (inputValue: string) => void;
};

const QuizModal: FC<ModalProps> = ({ onClose, onConfirm }) => {
  const [inputValue, setInputValue] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [isCorrect, setIsCorrect] = useState(true);

  const handleConfirm = () => {
    if (!inputValue.trim()) return;

    const correctAnswer = "초밥";

    if (inputValue.trim() === correctAnswer) {
      setIsCorrect(true);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        onConfirm(inputValue);
      }, 2000);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <ModalBox>
      <Header>
        <TopRow>
          <CloseButton onClose={onClose} />
        </TopRow>
        <LockIconWrapper>
          <Image
            src="/assets/icons/ic_lock.svg"
            alt="Lock"
            width={20}
            height={20}
          />
        </LockIconWrapper>
        <Description>
          다음 퀴즈를 맞추고
          <br />
          위키를 작성해 보세요.
        </Description>
      </Header>

      <Content>
        <FormWrapper>
          <Label htmlFor="answer">특별히 싫어하는 음식은?</Label>
          <div style={{ width: "100%" }}></div>
          <Input
            id="answer"
            type="text"
            value={inputValue}
            placeholder="답안을 입력해 주세요"
            $isError={!isCorrect}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInputValue(e.target.value);
              if (!isCorrect) setIsCorrect(true);
            }}
          />

          <ErrorMessage $visible={!isCorrect}>
            정답이 아닙니다. 다시 시도해 주세요.
          </ErrorMessage>

          <div className="w-full max-w-[355px]">
            <PrimaryButton
              label="확인"
              onClick={inputValue.trim() ? handleConfirm : undefined}
              variant="filled-green"
              width="355px"
              className={`
          w-full
          h-12
          mt-6
          rounded-lg
          text-white
          ${
            inputValue.trim()
              ? "bg-green-400 cursor-pointer"
              : "bg-gray-300 cursor-not-allowed"
          }
        `}
            />
          </div>
        </FormWrapper>
      </Content>

      <Notice>
        위키드는 자연과 함께하는 즐거운 공간입니다.
        <br />
        자연에 상처를 주지 않도록 작성해 주세요.
      </Notice>

      {showToast && <Toast message="답안이 제출되었습니다! ✔︎" />}
    </ModalBox>
  );
};

export default QuizModal;
