import { useRouter } from "next/router";
import { useState } from "react";
import * as S from "./[code].style";
import ProfileBar from "@/components/myWikiPage/ProfileBar/ProfileBar";
import PrimaryButton from "@/components/common/PrimaryButton";
import LinkButton from "@/components/common/LinkButton";
import QuizModal from "@/components/myWikiPage/QuizModal/QuizModal";

import { useUserInfo } from "@/hooks/mywiki/useProfileInfo";
import { useProfileInfo } from "@/hooks/mywiki/useUserInfo";

export default function WikiPage() {
  const router = useRouter();
  const { code } = router.query;

  const { user, loading: userLoading } = useUserInfo();
  const { profile, loading: profileLoading } = useProfileInfo(
    typeof code === "string" ? code : ""
  );

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

  if (userLoading || profileLoading) return <p>로딩 중...</p>;
  if (!user || !profile) return <p>데이터 없음</p>;

  return (
    <S.Container>
      <ProfileBar isEditMode={isEditMode} user={user} profile={profile} />

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
