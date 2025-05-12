import React from "react";
import "@/styles/GlobalStyle.ts";
import TextEditorToolbar from "@/components/mywikipage/TextEditorToolbar/TextEditorToolbar";
import { useEditor, EditorContent } from "@tiptap/react";

// TipTap extensions
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Heading from "@tiptap/extension-heading";
import Image from "@tiptap/extension-image";

export default function Home() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: false,
        orderedList: false,
        listItem: false,
        heading: false,
      }),
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Heading.configure({ levels: [1, 2, 3] }),
      BulletList,
      OrderedList,
      ListItem,
      Image,
    ],
    content: "<p>여기에 내용을 입력하세요</p>",
  });

  return (
    <>
      <TextEditorToolbar editor={editor} userName="홍길동" />
      <EditorContent editor={editor} />
    </>
  );
}
