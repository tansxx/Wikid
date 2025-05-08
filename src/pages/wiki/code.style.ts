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

export const Article = styled.div`
  line-height: 1.6;
  font-size: 15px;
  color: #333;
`;

export const EmptyBox = styled.div`
  text-align: center;
  padding: 40px 0;
`;

export const EmptyText = styled.p`
  margin-bottom: 1rem;
  font-size: 16px;
`;
