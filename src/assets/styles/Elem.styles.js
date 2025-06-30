import styled from "styled-components";

export const MemoCard = styled.div`
  position: relative;
  width: 220px;
  height: 240px;
  padding: 16px;
  background-color: #fffef5;
  border: 2px solid #f0c674;
  border-radius: 12px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  overflow: hidden;
  word-break: break-word;
`;

export const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: #5b3d00;
  margin: 0;
`;

export const DateText = styled.p`
  font-size: 0.85rem;
  color: #888;
  margin: 0;
`;

export const Content = styled.p`
  flex-grow: 1;
  font-size: 1rem;
  color: #333;
  white-space: pre-wrap;
  overflow-y: auto;
`;

export const RemoveButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 28px;
  height: 28px;
  font-size: 16px;
  background-color: #ff6b6b;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
  line-height: 1;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e04a4a;
  }
`;
