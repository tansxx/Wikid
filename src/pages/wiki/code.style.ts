import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 120px;
  gap: 80px;
`;

export const MainContent = styled.main`
  flex: 1;
  max-width: 720px;
`;

export const Sidebar = styled.aside`
  width: 280px;
  flex-shrink: 0;
`;

export const UserName = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const LinkBox = styled.div`
  margin-bottom: 16px;
`;

export const ShareLink = styled.p`
  font-size: 14px;
  color: #0088cc;
  margin-bottom: 4px;
`;

export const ButtonWrapper = styled.div`
  margin-bottom: 40px;
`;

export const Article = styled.article`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  white-space: pre-wrap;
`;

export const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  margin: 24px 0 40px;
`;

export const EmptyBox = styled.div`
  background-color: #f8f9fb;
  padding: 48px 32px;
  border-radius: 12px;
  text-align: center;
  color: #555;
`;

export const EmptyText = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  line-height: 1.5;
  white-space: pre-line;
`;
