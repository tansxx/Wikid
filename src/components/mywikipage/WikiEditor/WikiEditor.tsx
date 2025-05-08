import { useEditor, EditorContent } from "@tiptap/react";
// 개별 익스텐션을 모두 명시적으로 가져옵니다
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";
import History from "@tiptap/extension-history";

import PrimaryButton from "@/components/common/PrimaryButton";
import TextEditorToolbar from "../TextEditorToolbar/TextEditorToolbar";
import * as S from "./WikiEditor.style";
import { useEffect } from "react";

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
  // 에디터 인스턴스를 생성하고 모든 익스텐션을 명시적으로 설정합니다
  const editor = useEditor({
    extensions: [
      // 핵심 익스텐션
      Document,
      Paragraph,
      Text,
      History,

      // 서식 익스텐션
      Bold,
      Italic,
      Underline,

      // 제목 익스텐션
      Heading.configure({
        levels: [1, 2, 3],
      }),

      // 목록 익스텐션
      BulletList.configure({
        HTMLAttributes: {
          class: "bullet-list",
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: "ordered-list",
        },
      }),
      ListItem,

      // 정렬 익스텐션
      TextAlign.configure({
        types: ["heading", "paragraph"],
        alignments: ["left", "center", "right"],
        defaultAlignment: "left",
      }),

      // 이미지 익스텐션
      Image.configure({
        inline: false,
        allowBase64: true,
      }),
    ],
    content: initialContent || "<p></p>",
    autofocus: true,
    onTransaction: () => {
      // 에디터 업데이트 확인을 위한 콜백
      console.log("에디터 내용 업데이트");
    },
  });

  // 에디터 내용 변경 감지용 useEffect
  useEffect(() => {
    if (editor) {
      console.log("에디터가 준비되었습니다");

      // 디버깅을 위해 에디터 객체의 등록된 익스텐션들을 확인
      console.log("등록된 익스텐션들:", editor.extensionManager.extensions);

      // 에디터 명령어 테스트
      console.log(
        "제목 명령어 사용 가능 여부:",
        editor.can().setHeading({ level: 1 })
      );
      console.log(
        "글머리 기호 목록 명령어 사용 가능 여부:",
        editor.can().toggleBulletList()
      );
    }
  }, [editor]);

  const handleSubmit = () => {
    if (editor) {
      const content = editor.getHTML();
      console.log("저장할 내용:", content);
      onSubmit(content);
    }
  };

  // 에디터가 로드되지 않았다면 로딩 표시
  if (!editor) {
    return <div>에디터 로딩 중...</div>;
  }

  return (
    <S.Container>
      <S.EditorWrapper>
        <TextEditorToolbar editor={editor} userName={userName} />
        <S.EditorContent>
          <EditorContent editor={editor} />
        </S.EditorContent>
        <S.ButtonGroup>
          <PrimaryButton
            onClick={handleSubmit}
            disabled={
              disabled ||
              !editor.getHTML().trim() ||
              editor.getHTML() === "<p></p>"
            }
            variant="filled-green"
          >
            저장
          </PrimaryButton>
          <PrimaryButton onClick={onCancel} variant="outlined-green">
            취소
          </PrimaryButton>
        </S.ButtonGroup>
      </S.EditorWrapper>
    </S.Container>
  );
}
