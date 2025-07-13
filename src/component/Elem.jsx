/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useMemoStore } from "../store/MemoList";
import { useState } from "react";

const MemoElem = ({ id, title, date, content, author }) => {
  const { removeMemo } = useMemoStore();
  const [isOpen, setIsOpen] = useState(false);

  //카드 상세내용 보기 함수 정의
  const handleCardClick = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div css={memoCard} onClick={handleCardClick}>
        <button
          css={removeButton}
          onClick={(e) => {
            e.stopPropagation(); // 카드 클릭 막기
            if (window.confirm("이 메모를 삭제하시겠습니까?")) {
              removeMemo(id);
            }
          }}
        >
          ✕
        </button>
        <h3 css={titleStyle}>제목: {title}</h3>
        <p css={dateText}>작성날짜: {date}</p>
        <p css={authorStyle}>작성자: {author}</p>
      </div>

      {isOpen && ( //상세내용 부분이 열렸을때
        <div css={modalOverlay} onClick={closeModal}>
          <div css={modalContent} onClick={(e) => e.stopPropagation()}>
            <h2 css={modalTitle}>제목: {title}</h2>
            <p><strong>작성날짜:</strong> {date}</p>
            <p><strong>작성자:</strong> {author}</p>
            <p><strong>내용: </strong>{content}</p>
            <button css={closeButton} onClick={closeModal}>닫기</button>
          </div>
        </div>
      )}
    </>
  );
};

export default MemoElem;

//이모션 스타일

const memoCard = css`
  position: relative;
  width: 220px;
  height: 240px;
  padding: 16px;
  background-color: #fffef5;
  border-radius: 12px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  cursor: pointer;
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
  margin: 0 0 1 0 ;
  position: absolute;
  bottom: 0;
`;

const authorStyle = css`
  font-size: 0.9rem;
  color: #333;
  position: absolute;
  padding-bottom: 24px;
  bottom: 0;
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
  z-index: 2;

  &:hover {
    background-color: #e04a4a;
  }
`;

// 상세보기 스타일

const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const modalContent = css`
  background-color: white;
  padding: 24px;
  border-radius: 12px;
  max-width: 400px;
  width: 80%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease;
`;

const modalTitle = css`
  font-size: 1.5rem;
  margin-bottom: 16px;
`;

const closeButton = css`
  margin-top: 16px;
  padding: 10px 20px;
  background-color: #fa451e;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #c53711;
  }
`;
