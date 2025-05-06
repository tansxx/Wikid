import { useRouter } from "next/router";
import { useState } from "react";
import * as S from "./[code].style";
import ProfileBar from "@/components/mywikipage/ProfileBar/ProfileBar";
import PrimaryButton from "@/components/common/PrimaryButton";
import LinkButton from "@/components/common/LinkButton";
import QuizModal from "@/components/mywikipage/QuizModal/QuizModal";

export default function WikiPage() {
  const router = useRouter();
  const { code } = router.query;

  const [isEditMode, setIsEditMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmQuiz = () => {
    setIsEditMode(true);
    handleCloseModal();
  };

  return (
    <S.Container>
      <ProfileBar isEditMode={isEditMode} />

      <S.ButtonRow>
        <PrimaryButton label="위키 참여하기" onClick={handleOpenModal} />
        <LinkButton label="링크" link={`https://wikied.com/wiki/${code}`} />
      </S.ButtonRow>

      {isModalOpen && (
        <QuizModal onClose={handleCloseModal} onConfirm={handleConfirmQuiz} />
      )}
    </S.Container>
  );
}
