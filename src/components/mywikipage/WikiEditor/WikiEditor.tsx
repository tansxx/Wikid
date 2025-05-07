import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";
import PrimaryButton from "@/components/common/PrimaryButton";
import TextEditorToolbar from "../TextEditorToolbar/TextEditorToolbar";
import axios from "@/apis/axiosInstance";
import { useProfileCode } from "@/hooks/myWiki/useProfileCode";
import { useUserInfo } from "@/hooks/myWiki/useUserInfo";
import * as S from "./WikiEditor.style";

interface Props {
  initialContent?: string;
  onSuccess: () => void;
  onCancel: () => void;
  securityAnswer: string;
}

export default function WikiEditor({
  initialContent,
  onSuccess,
  onCancel,
  securityAnswer,
}: Props) {
  const code = useProfileCode();
  const { user } = useUserInfo();
  const [loading, setLoading] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Image,
    ],
    content: initialContent,
  });

  const handleSubmit = async () => {
    if (!editor || !editor.getHTML().trim() || !code || !securityAnswer) return;

    setLoading(true);
    try {
      await axios.post(`/profiles/${code}/ping`, { securityAnswer });
      await axios.patch(`/profiles/${code}`, {
        content: editor.getHTML(),
      });
      onSuccess();
    } catch (e) {
      console.error("프로필 수정 실패", e);
    } finally {
      setLoading(false);
    }
  };

  if (!editor || !user) return null;

  return (
    <S.Container>
      {editor && <TextEditorToolbar editor={editor} userName={user.name} />}
      <S.EditorWrapper>
        <S.EditorBox>
          <EditorContent editor={editor} />
        </S.EditorBox>
        <S.ButtonGroup>
          <PrimaryButton
            label="취소"
            variant="outlined-green"
            onClick={onCancel}
          />
          <PrimaryButton
            label="저장"
            onClick={handleSubmit}
            disabled={loading || !editor?.getHTML().trim()}
            variant="filled-green"
          />
        </S.ButtonGroup>
      </S.EditorWrapper>
    </S.Container>
  );
}
