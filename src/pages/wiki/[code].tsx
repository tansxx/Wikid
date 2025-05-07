import { useRouter } from "next/router";
import { useState } from "react";
import * as S from "./code.style";
import ProfileBar from "@/components/myWikiPage/ProfileBar/ProfileBar";
import PrimaryButton from "@/components/common/PrimaryButton";
import LinkButton from "@/components/common/LinkButton";
import QuizModal from "@/components/myWikiPage/QuizModal/QuizModal";
import WikiEditor from "@/components/myWikiPage/WikiEditor/WikiEditor";

import { useUserInfo } from "@/hooks/myWiki/useUserInfo";
import { useProfileInfo } from "@/hooks/myWiki/useProfileInfo";

export default function WikiPage() {
  const router = useRouter();
  const { code } = router.query;

  const { user, loading: userLoading } = useUserInfo();
  const {
    profile,
    loading: profileLoading,
    refetch: refetchProfile,
  } = useProfileInfo(typeof code === "string" ? code : "");

  const [isEditMode, setIsEditMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [securityAnswer, setSecurityAnswer] = useState("");

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleConfirmQuiz = (answer: string) => {
    setSecurityAnswer(answer);
    setIsEditMode(true);
    handleCloseModal();
  };

  const handleCancelEdit = () => setIsEditMode(false);
  const handleSuccessEdit = async () => {
    await refetchProfile();
    setIsEditMode(false);
  };

  if (userLoading || profileLoading) return <p>로딩 중...</p>;
  if (!user || !profile) return null;

  return (
    <S.Container>
      <S.MainContent>
        <S.UserNameRow>
          <S.UserNameRowTop>
            <S.UserName>{user.name}</S.UserName>
            <PrimaryButton label="위키 참여하기" onClick={handleOpenModal} />
          </S.UserNameRowTop>

          {typeof code === "string" && (
            <LinkButton
              label={`https://wikied.com/wiki/${code}`}
              link={`https://wikied.com/wiki/${code}`}
            />
          )}
        </S.UserNameRow>

        {isEditMode ? (
          <WikiEditor
            initialContent={profile.content || ""}
            onSuccess={handleSuccessEdit}
            onCancel={handleCancelEdit}
            securityAnswer={securityAnswer}
          />
        ) : profile.content ? (
          <S.Article>
            <div dangerouslySetInnerHTML={{ __html: profile.content }} />
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
