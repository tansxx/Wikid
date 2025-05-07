import { useRouter } from "next/router";
import { useState } from "react";
import * as S from "./[code].style";
import ProfileBar from "@/components/mywikipage/ProfileBar/ProfileBar";
import PrimaryButton from "@/components/common/PrimaryButton";
import LinkButton from "@/components/common/LinkButton";
import QuizModal from "@/components/mywikipage/QuizModal/QuizModal";

// 목업 데이터
const MOCK_CONTENT = {
  overview:
    "코드잇 콘텐츠 프로듀서이자, 프론트엔드 엔지니어. 포토마켓 프론트엔드 엔지니어 출신이다.",
  hobby:
    "식물을 키우는 것을 좋아한다. 비집이나 로즈마리 같은 허브류부터, 파, 당근 같은 채소류까지 다양하게 키우는 것으로 알려져 있다. 이렇게 키운 식물들을 직접 요리에 활용하기도 한다.",
  extra:
    "걸어다니는 사전이라고 불릴 정도로 다양한 분야의 지식을 두루두루 알고 있다. 특히 새로운 서비스 출시 관련 소식은 아주 잘 알고 있는데, 얘기를 들어보면 다양하게 구독하고 있는 뉴스레터들이 큰 도움이 된다고 한다.",
  preference:
    "가위바위보를 좋아한다. 후식을 먹는다면 꼭 추가 금액을 내야 하더라도, 편의점에서 뭘 사 와야 하는 경우, 거의 항상 가위바위보를 제안한다. 제안을 많이 하다 보니 자신이 질리는 경우도 꽤 많으며, 크게 개의치 않아 하는 것 같다.",
};

export default function WikiPage() {
  const router = useRouter();
  const { code } = router.query;

  const [isEditMode, setIsEditMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wikiContent] = useState(MOCK_CONTENT);

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
