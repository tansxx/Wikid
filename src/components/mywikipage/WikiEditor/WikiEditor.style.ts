import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const EditorWrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const EditorContent = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  min-height: 300px;
  padding: 16px;
  margin-bottom: 16px;
  background-color: white;

  /* 에디터 내부 스타일 */
  .ProseMirror {
    min-height: 250px;
    outline: none;

    /* 제목 스타일 */
    h1 {
      font-size: 24px;
      font-weight: bold;
      margin: 16px 0 8px;
    }

    h2 {
      font-size: 20px;
      font-weight: bold;
      margin: 14px 0 8px;
    }

    h3 {
      font-size: 16px;
      font-weight: bold;
      margin: 12px 0 8px;
    }

    /* 목록 스타일 */
    ul {
      margin-left: 24px;
      list-style-type: disc;
    }

    ol {
      margin-left: 24px;
      list-style-type: decimal;
    }

    li {
      margin: 4px 0;
    }

    /* 정렬 스타일 */
    p[style*="text-align: center"] {
      text-align: center;
    }

    p[style*="text-align: right"] {
      text-align: right;
    }

    /* 이미지 스타일 */
    img {
      max-width: 100%;
      height: auto;
      margin: 8px 0;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  margin-top: 8px;
`;
