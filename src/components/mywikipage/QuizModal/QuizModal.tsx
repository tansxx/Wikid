import { FC, useState } from "react";
import CloseButton from "@/components/CloseButton";
import InputBox from "@/components/InputBox";
import PrimaryButton from "@/components/PrimaryButton";
import Image from "next/image";
import {
  ModalBox,
  Header,
  TopRow,
  LockIconWrapper,
  Description,
  Content,
  Footer,
} from "../QuizModal/QuizModal.style";

type ModalProps = {
  onClose: () => void;
  onConfirm: (inputValue: string) => void;
};

const Modal: FC<ModalProps> = ({ onClose, onConfirm }) => {
  const [inputValue, setInputValue] = useState("");

  const handleConfirm = () => {
    onConfirm(inputValue);
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
        <InputBox placeholder="답안을 입력해 주세요" onChange={setInputValue} />
      </Content>

      <Footer>
        <PrimaryButton
          label="확인"
          onClick={handleConfirm}
          variant="filled-green"
          width="100%"
        />
      </Footer>
    </ModalBox>
  );
};

export default Modal;
