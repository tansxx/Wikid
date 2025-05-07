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
    const headingLevel = parseInt(level) as 1 | 2 | 3;
    editor.chain().focus().toggleHeading({ level: headingLevel }).run();
  };

  return (
    <S.BarWrapper>
      <S.LeftLabel>{userName}의 위키 수정 중</S.LeftLabel>

      <S.RightControls>
        <S.ControlGroup>
          <S.ControlButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            $active={editor.isActive("bold")}
          >
            <Bold size={16} />
          </S.ControlButton>

          <S.ControlButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            $active={editor.isActive("italic")}
          >
            <Italic size={16} />
          </S.ControlButton>

          <S.ControlButton
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            $active={editor.isActive("underline")}
          >
            <Underline size={16} />
          </S.ControlButton>
        </S.ControlGroup>

        <S.Divider />

        <S.HeadingSelect
          onChange={(e) => handleHeadingChange(e.target.value)}
          defaultValue=""
        >
          <option value="" disabled>
            제목
          </option>
          <option value="1">제목 1</option>
          <option value="2">제목 2</option>
          <option value="3">제목 3</option>
        </S.HeadingSelect>

        <S.ControlButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          $active={editor.isActive("bulletList")}
        >
          <List size={16} />
        </S.ControlButton>

        <S.ControlButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          $active={editor.isActive("orderedList")}
        >
          <ListOrdered size={16} />
        </S.ControlButton>

        <S.Divider />

        <S.ControlButton
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
        >
          <AlignLeft size={16} />
        </S.ControlButton>

        <S.ControlButton
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
        >
          <AlignCenter size={16} />
        </S.ControlButton>

        <S.ControlButton
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
        >
          <AlignRight size={16} />
        </S.ControlButton>

        <S.Divider />

        <S.ControlButton
          onClick={() => {
            const url = window.prompt("이미지 URL을 입력하세요");
            if (url) {
              editor.chain().focus().setImage({ src: url }).run();
            }
          }}
        >
          <Image size={16} />
        </S.ControlButton>

        <S.ControlButton disabled>
          <Video size={16} />
        </S.ControlButton>

        <S.ControlButton disabled>
          <Link size={16} />
        </S.ControlButton>
      </S.RightControls>
    </S.BarWrapper>
  );
}
