import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

export const EditorBox = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1.2rem;
  background-color: white;
  min-height: 300px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
