import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";
import PrimaryButton from "@/components/common/PrimaryButton";
import TextEditorToolbar from "../TextEditorToolbar/TextEditorToolbar";
import * as S from "./WikiEditor.style";

interface Props {
  initialContent?: string;
  onSubmit: (content: string) => void;
  onCancel: () => void;
  disabled?: boolean;
  userName: string;
}

export default function WikiEditor({
  initialContent,
  onSubmit,
  onCancel,
  disabled,
  userName,
}: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Image,
    ],
    content: initialContent,
  });

  if (!editor) return null;

  return (
    <S.EditorWrapper>
      <TextEditorToolbar editor={editor} />
      <EditorContent editor={editor} />
      <PrimaryButton
        onClick={() => onSubmit(editor.getHTML())}
        disabled={disabled || !editor.getHTML().trim()}
        variant="filled-green"
      >
        저장
      </PrimaryButton>
      <PrimaryButton onClick={onCancel} variant="outlined">
        취소
      </PrimaryButton>
    </S.EditorWrapper>
  );
}
