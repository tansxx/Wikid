import { useRouter } from "next/router";
import { useState } from "react";
import * as S from "./code.style";
import ProfileBar from "@/components/myWikiPage/ProfileBar/ProfileBar";
import PrimaryButton from "@/components/common/PrimaryButton";
import LinkButton from "@/components/common/LinkButton";
import QuizModal from "@/components/myWikiPage/QuizModal/QuizModal";

import { useUserInfo } from "@/hooks/myWiki/useUserInfo";
import { useProfileInfo } from "@/hooks/myWiki/useProfileInfo";
import { useArticles } from "@/hooks/myWiki/useArticles";

export default function WikiPage() {
  const router = useRouter();
  const { code } = router.query;

  console.log("code 값 확인:", code);

  const { user, loading: userLoading } = useUserInfo();
  const { profile, loading: profileLoading } = useProfileInfo(
    typeof code === "string" ? code : ""
  );

  const { articles, loading: articlesLoading } = useArticles();

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

  const currentArticle = articles.find((article) => article.code === code);

  return (
    <S.Container>
      <S.MainContent>
        <S.UserName>{user.name}</S.UserName>
        <S.ButtonRow>
          <PrimaryButton label="위키 참여하기" onClick={handleOpenModal} />
          {typeof code === "string" && (
            <LinkButton label="링크" link={`https://wikied.com/wiki/${code}`} />
          )}
        </S.ButtonRow>
        {profile.content ? (
          <S.Article>
            <div style={{ whiteSpace: "pre-wrap" }}>{profile.content}</div>
          </S.Article>
        ) : (
          <S.EmptyBox>
            <S.EmptyText>
              아직 작성된 내용이 없네요.
              <br />
              위키에 참여해 보세요!
            </S.EmptyText>
            <PrimaryButton label="시작하기" onClick={handleOpenModal} />
          </S.EmptyBox>
        )}
      </S.MainContent>
      <S.Sidebar>
        <ProfileBar isEditMode={isEditMode} user={user} profile={profile} />
      </S.Sidebar>
      {isModalOpen && (
        <QuizModal onClose={handleCloseModal} onConfirm={handleConfirmQuiz} />
      )}
    </S.Container>
  );
}
