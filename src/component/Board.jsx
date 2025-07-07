import React from "react";
import {
  MemoWrapper,
  MemoCard,
  Title,
  DateText,
  Content,
  EmptyMessage,
} from "../assets/styles/Board.styles.js";
import MemoElem from "./Elem.jsx";

const Board = ({ memoList }) => {
  return (
    <MemoWrapper>
      {memoList.length === 0 ? (
        <EmptyMessage>추가된 메모가 없습니다.</EmptyMessage>
      ) : (
        memoList.map(({ id, title, date, content }) => (
          <MemoElem 
          key={id}
          id={id}
          title={title}
          date={date}
          content={content}
          />
        ))
      )}
    </MemoWrapper>
  );
};

export default Board;
