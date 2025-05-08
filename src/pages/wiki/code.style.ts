import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

export const MainContent = styled.div`
  width: 700px;
  margin-right: 4rem;
  padding-top: 60px;
`;

export const Sidebar = styled.div`
  width: 280px;
`;

export const UserNameRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 1.5rem;
`;

export const UserName = styled.h1`
  font-size: 28px;
  font-weight: 700;
`;

export const UserNameRowTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 10px;
`;

// code.style.ts 파일에 다음 스타일을 추가

export const Article = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  /* 제목 스타일 */
  h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
    color: #333;
  }

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 14px;
    color: #333;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 12px;
    color: #333;
  }

  /* 목록 스타일 */
  ul.bullet-list {
    list-style-type: disc;
    padding-left: 20px;
    margin-bottom: 16px;
  }

  ol.ordered-list {
    list-style-type: decimal;
    padding-left: 20px;
    margin-bottom: 16px;
  }

  li {
    margin-bottom: 8px;
  }

  /* 텍스트 정렬 스타일 */
  p[style*="text-align: left"] {
    text-align: left;
  }

  p[style*="text-align: center"] {
    text-align: center;
  }

  p[style*="text-align: right"] {
    text-align: right;
  }

  /* 텍스트 서식 스타일 */
  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  u {
    text-decoration: underline;
  }

  /* 이미지 스타일 */
  img {
    max-width: 100%;
    height: auto;
    margin: 10px 0;
  }

  /* 기본 단락 스타일 */
  p {
    margin-bottom: 16px;
    line-height: 1.6;
  }
`;

export const EmptyBox = styled.div`
  text-align: center;
  padding: 40px 0;
`;

export const EmptyText = styled.p`
  margin-bottom: 1rem;
  font-size: 16px;
`;
