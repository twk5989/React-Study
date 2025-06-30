// Board.styles.js
import styled from "styled-components";

export const MemoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
  width: 820px;
  margin: 24px auto;
  min-height: 280px;
  max-height: 480px;
  overflow-y: auto;
  background-color: #81b771;
  border-radius: 16px;
  border: 8px solid #875a36;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

export const MemoCard = styled.div`
  background: #fffbea;
  border-radius: 12px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
  flex: 0 0 calc(33.333% - 16px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #3c3c3c;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  color: #4a3c1a;
  font-weight: 700;
  margin: 0;
`;

export const DateText = styled.p`
  font-size: 0.85rem;
  color: #6b6b6b;
  margin: 0;
`;

export const Content = styled.p`
  font-size: 1rem;
  line-height: 1.3;
  color: #2e2e2e;
  white-space: pre-wrap;
  flex-grow: 1;
`;

export const EmptyMessage = styled.span`
  width: 100%;
  text-align: center;
  font-size: 1.1rem;
  color: #fff;
  padding: 12px;
  background: #a3c17a;
  border-radius: 8px;
`;
