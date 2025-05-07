import { FC, useState, useEffect } from "react";
import CloseButton from "@/components/common/CloseButton";
import PrimaryButton from "@/components/common/PrimaryButton";
import Toast from "@/components/common/Toast";
import Image from "next/image";
import {
  ModalWrapper,
  Backdrop,
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
} from "./QuizModal.style";

import { useProfileCode } from "@/hooks/myWiki/useProfileCode";
import axios from "@/apis/axiosInstance";

type ModalProps = {
  onClose: () => void;
  onConfirm: (answer: string) => void;
};

const QuizModal: FC<ModalProps> = ({ onClose, onConfirm }) => {
  const [inputValue, setInputValue] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [isCorrect, setIsCorrect] = useState(true);
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const profileCode = useProfileCode();

  useEffect(() => {
    const fetchQuestion = async () => {
      if (!profileCode) return;
      try {
        const res = await axios.get(`/profiles/${profileCode}`);
        setQuestion(res.data.securityQuestion || "질문이 없습니다.");
      } catch (err) {
        console.error("보안 질문 불러오기 실패", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestion();
  }, [profileCode]);

  const handleConfirm = async () => {
    if (!inputValue.trim()) return;

    try {
      await axios.post(`/profiles/${profileCode}/ping`, {
        securityAnswer: inputValue,
      });
      setIsCorrect(true);
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
        onConfirm(inputValue);
      }, 1500);
    } catch (err) {
      setIsCorrect(false);
    }
  };

  if (isLoading || !profileCode) {
    return (
      <ModalWrapper>
        <Backdrop onClick={onClose} />
        <ModalBox>
          <p>퀴즈 정보를 불러오는 중입니다...</p>
        </ModalBox>
      </ModalWrapper>
    );
  }

  return (
    <ModalWrapper>
      <Backdrop onClick={onClose} />
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
            <Label htmlFor="answer">{question}</Label>
            <Input
              id="answer"
              type="text"
              value={inputValue}
              placeholder="답안을 입력해 주세요"
              $isError={!isCorrect}
              onChange={(e) => {
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
                onClick={handleConfirm}
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
                disabled={!inputValue.trim()}
              />
            </div>
          </FormWrapper>
        </Content>

        <Notice>
          위키드는 자연과 함께하는 즐거운 공간입니다.
          <br />
          자연에 상처를 주지 않도록 작성해 주세요.
        </Notice>

        {showToast && (
          <Toast message="정답이 맞았습니다! ✨ 수정이 가능합니다." />
        )}
      </ModalBox>
    </ModalWrapper>
  );
};

export default QuizModal;
