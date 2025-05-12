import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import * as S from "../../styles/wiki/code.style";
import ProfileBar from "@/components/mywikipage/ProfileBar/ProfileBar";
import PrimaryButton from "@/components/common/PrimaryButton";
import LinkButton from "@/components/common/LinkButton";
import QuizModal from "@/components/mywikipage/QuizModal/QuizModal";
import WikiEditor from "@/components/mywikipage/WikiEditor/WikiEditor";
import type { ProfileFormValues } from "@/components/mywikipage/ProfileForm/ProfileForm";

import { useUserInfo } from "@/hooks/mywiki/useUserInfo";
import { useProfileInfo } from "@/hooks/mywiki/useProfileInfo";
import { notifyProfileEditing, updateProfile } from "@/apis/profile";
import InactivityModal from "@/components/mywikipage/InactivityModal/InactivityModal";

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
  const [isInactiveModalOpen, setIsInactiveModalOpen] = useState(false);
  const [securityAnswer, setSecurityAnswer] = useState("");
  const [editorContent, setEditorContent] = useState("");

  const [profileForm, setProfileForm] = useState<ProfileFormValues>({
    nickname: "",
    city: "",
    mbti: "",
    job: "",
    sns: "",
    birthday: "",
    bloodType: "",
    nationality: "",
    image: "",
  });

  const INACTIVITY_TIMEOUT = 5 * 60 * 1000;
  const inactivityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (profile) {
      setProfileForm({
        nickname: profile.nickname || "",
        city: profile.city || "",
        mbti: profile.mbti || "",
        job: profile.job || "",
        sns: profile.sns || "",
        birthday: profile.birthday || "",
        bloodType: profile.bloodType || "",
        nationality: profile.nationality || "",
        image: profile.image || "",
      });
      setEditorContent(profile.content || "");
    }
  }, [profile]);

  useEffect(() => {
    const resetTimer = () => {
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
      inactivityTimer.current = setTimeout(() => {
        setIsEditMode(false);
        setIsInactiveModalOpen(true);
      }, INACTIVITY_TIMEOUT);
    };

    if (isEditMode) {
      document.addEventListener("keydown", resetTimer);
      document.addEventListener("mousedown", resetTimer);
      document.addEventListener("touchstart", resetTimer);
      resetTimer();

      return () => {
        document.removeEventListener("keydown", resetTimer);
        document.removeEventListener("mousedown", resetTimer);
        document.removeEventListener("touchstart", resetTimer);
        if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
      };
    }
  }, [isEditMode]);

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

  const saveWikiAndProfile = async (content: string) => {
    try {
      if (typeof code === "string") {
        await notifyProfileEditing(code, securityAnswer);

        await updateProfile(code, {
          ...profileForm,
          content: content,
        });

        handleSuccessEdit();
      }
    } catch (error) {
      console.error(error);
    }
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
            initialContent={editorContent}
            onSubmit={saveWikiAndProfile}
            onCancel={handleCancelEdit}
            userName={user.name}
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
        <ProfileBar
          isEditMode={isEditMode}
          user={user}
          profile={profileForm}
          onSaveProfile={(updatedProfile) => {
            setProfileForm(updatedProfile);
          }}
          onChange={setProfileForm}
        />
      </S.Sidebar>

      {isModalOpen && (
        <QuizModal onClose={handleCloseModal} onConfirm={handleConfirmQuiz} />
      )}

      {isInactiveModalOpen && (
        <InactivityModal onClose={() => setIsInactiveModalOpen(false)} />
      )}
    </S.Container>
  );
}
