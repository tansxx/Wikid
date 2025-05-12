import { Editor } from "@tiptap/react";
import * as S from "./TextEditorToolbar.styles";
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Image,
  Video,
  Link,
} from "lucide-react";

interface TextEditorToolbarProps {
  editor: Editor | null;
  userName?: string;
}

export default function TextEditorToolbar({
  editor,
  userName = "사용자",
}: TextEditorToolbarProps) {
  if (!editor) return null;

  const handleHeadingChange = (level: string) => {
    if (level === "") return;

    const headingLevel = parseInt(level) as 1 | 2 | 3;

    // 현재 선택한 레벨이 이미 적용되어 있는지 확인
    if (editor.isActive("heading", { level: headingLevel })) {
      // 이미 적용된 경우 제목 해제
      editor.chain().focus().setParagraph().run();
      console.log("제목 해제됨");
    } else {
      // 새로운 제목 레벨 적용
      editor.chain().focus().setHeading({ level: headingLevel }).run();
      console.log(`제목 레벨 ${headingLevel} 적용됨`);
    }
  };

  // 현재 활성화된 제목 수준 반환
  const getActiveHeadingLevel = () => {
    if (editor.isActive("heading", { level: 1 })) return "1";
    if (editor.isActive("heading", { level: 2 })) return "2";
    if (editor.isActive("heading", { level: 3 })) return "3";
    return "";
  };

  // 목록 토글 핸들러
  const toggleBulletList = () => {
    editor.chain().focus().toggleBulletList().run();
    console.log(
      "글머리 기호 목록 토글됨, 현재 상태:",
      editor.isActive("bulletList")
    );
  };

  const toggleOrderedList = () => {
    editor.chain().focus().toggleOrderedList().run();
    console.log(
      "번호 매기기 목록 토글됨, 현재 상태:",
      editor.isActive("orderedList")
    );
  };

  // 텍스트 정렬 핸들러
  const handleTextAlign = (alignment: "left" | "center" | "right") => {
    editor.chain().focus().setTextAlign(alignment).run();
    console.log(`텍스트 정렬 ${alignment} 적용됨`);
  };

  // 이미지 삽입 핸들러
  const handleImageInsert = () => {
    const url = window.prompt("이미지 URL을 입력하세요");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
      console.log("이미지 삽입됨:", url);
    }
  };

  return (
    <S.BarWrapper>
      <S.LeftLabel>{userName}</S.LeftLabel>

      <S.RightControls>
        <S.ControlGroup>
          <S.ControlButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            $active={editor.isActive("bold")}
            title="굵게"
            type="button"
          >
            <Bold size={16} />
          </S.ControlButton>

          <S.ControlButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            $active={editor.isActive("italic")}
            title="기울임"
            type="button"
          >
            <Italic size={16} />
          </S.ControlButton>

          <S.ControlButton
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            $active={editor.isActive("underline")}
            title="밑줄"
            type="button"
          >
            <Underline size={16} />
          </S.ControlButton>
        </S.ControlGroup>

        <S.Divider />

        <S.HeadingSelect
          onChange={(e) => handleHeadingChange(e.target.value)}
          value={getActiveHeadingLevel()}
          title="제목 스타일"
        >
          <option value="" disabled>
            제목
          </option>
          <option value="1">제목 1</option>
          <option value="2">제목 2</option>
          <option value="3">제목 3</option>
        </S.HeadingSelect>

        <S.ControlButton
          onClick={toggleBulletList}
          $active={editor.isActive("bulletList")}
          title="글머리 기호 목록"
          type="button"
        >
          <List size={16} />
        </S.ControlButton>

        <S.ControlButton
          onClick={toggleOrderedList}
          $active={editor.isActive("orderedList")}
          title="번호 매기기 목록"
          type="button"
        >
          <ListOrdered size={16} />
        </S.ControlButton>

        <S.Divider />

        <S.ControlButton
          onClick={() => handleTextAlign("left")}
          $active={editor.isActive({ textAlign: "left" })}
          title="왼쪽 정렬"
          type="button"
        >
          <AlignLeft size={16} />
        </S.ControlButton>

        <S.ControlButton
          onClick={() => handleTextAlign("center")}
          $active={editor.isActive({ textAlign: "center" })}
          title="가운데 정렬"
          type="button"
        >
          <AlignCenter size={16} />
        </S.ControlButton>

        <S.ControlButton
          onClick={() => handleTextAlign("right")}
          $active={editor.isActive({ textAlign: "right" })}
          title="오른쪽 정렬"
          type="button"
        >
          <AlignRight size={16} />
        </S.ControlButton>

        <S.Divider />

        <S.ControlButton
          onClick={handleImageInsert}
          title="이미지 삽입"
          type="button"
        >
          <Image size={16} />
        </S.ControlButton>

        <S.ControlButton disabled title="비디오 삽입 (비활성화)" type="button">
          <Video size={16} />
        </S.ControlButton>

        <S.ControlButton disabled title="링크 삽입 (비활성화)" type="button">
          <Link size={16} />
        </S.ControlButton>
      </S.RightControls>
    </S.BarWrapper>
  );
}
