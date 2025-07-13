import React from "react";
import {
  MemoWrapper,
  MemoCard,
  Title,
  DateText,
  Content,
  Author,
  EmptyMessage,
} from "../assets/styles/Board.styles.js";
import MemoElem from "./Elem.jsx";

const Board = ({ memoList }) => {
  return (
    <MemoWrapper>
      {memoList.length === 0 ? (
        <EmptyMessage>추가된 메모가 없습니다.</EmptyMessage>
      ) : (
        memoList.map(({ id, title, date, content, author }) => (
          <MemoElem 
          key={id}
          id={id}
          title={title}
          date={date}
          content={content}
          author={author}
          />
        ))
      )}
    </MemoWrapper>
  );
};

export default Board;
