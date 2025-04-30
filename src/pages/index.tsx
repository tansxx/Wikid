import React from "react";
import { useState } from "react";
import "@/styles/GlobalStyle.ts";
import QuizModal from "@/components/mywikipage/QuizModal/QuizModal";
import styled from "styled-components";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = (inputValue: string) => {
    console.log("확인 버튼 클릭:", inputValue);
    setIsModalOpen(false);
  };

  return (
    <PageWrapper>
      <div>
        <OpenButton onClick={handleOpenModal}>모달 열기</OpenButton>
      </div>
      {isModalOpen && (
        <QuizModal onClose={handleCloseModal} onConfirm={handleConfirm} />
      )}
    </PageWrapper>
  );
}

// 스타일
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const OpenButton = styled.button`
  padding: 12px 24px;
  background-color: #4cbfa4;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 40px;
`;
