import React from "react";
import * as S from "./InactivityModal.style";
import CloseButton from "@/components/common/CloseButton";
import PrimaryButton from "@/components/common/PrimaryButton";

interface InactivityModalProps {
  onClose: () => void;
}

const InactivityModal: React.FC<InactivityModalProps> = ({ onClose }) => {
  return (
    <S.ModalContainer>
      <CloseButton onClose={onClose} />
      <S.Title>5분 이상 글을 쓰지 않아 접속이 끊어졌어요.</S.Title>
      <S.Message>위키 참여하기를 통해 다시 위키를 수정해 주세요.</S.Message>
      <S.Footer>
        <PrimaryButton onClick={onClose} label="확인" />
      </S.Footer>
    </S.ModalContainer>
  );
};

export default InactivityModal;
