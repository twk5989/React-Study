/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useMemoStore } from "../store/MemoList";

const MemoElem = ({ id, title, date, content, isActive }) => {
  const { removeMemo } = useMemoStore();

  return (
    <div css={memoCard(isActive)}>
      <button css={removeButton} onClick={() => {
        if (window.confirm("이 메모를 삭제하시겠습니까?")) {
          removeMemo(id);
        }
      }}>✕</button>
      <h3 css={titleStyle}>{title}</h3>
      <p css={dateText}>{date}</p>
      <p css={contentStyle}>{content}</p>
    </div>
  );
};

export default MemoElem;

// ✅ props 기반 스타일
const memoCard = (isActive) => css`
  position: relative;
  width: 220px;
  height: 240px;
  padding: 16px;
  background-color: #fffef5;
  border: 5px solid ${isActive ? "#ff6b6b" : "#ccc"}; // 조건부
  border-radius: 12px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  overflow: hidden;
  word-break: break-word;
`;

const titleStyle = css`
  font-size: 1.1rem;
  font-weight: 700;
  color: #5b3d00;
  margin: 0;
`;

const dateText = css`
  font-size: 0.85rem;
  color: #888;
  margin: 0;
`;

const contentStyle = css`
  flex-grow: 1;
  font-size: 1rem;
  color: #333;
  white-space: pre-wrap;
  overflow-y: auto;
`;

const removeButton = css`
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
