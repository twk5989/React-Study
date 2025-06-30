import React from "react";
import {
  MemoWrapper,
  MemoCard,
  Title,
  DateText,
  Content,
  EmptyMessage,
} from "../assets/styles/Board.styles.js";

const Board = ({ memoList }) => {
  return (
    <MemoWrapper>
      {memoList.length === 0 ? (
        <EmptyMessage>추가된 메모가 없습니다.</EmptyMessage>
      ) : (
        memoList.map(({ id, title, date, content }) => (
          <MemoCard key={id}>
            <Title>{title}</Title>
            <DateText>{date}</DateText>
            <Content>{content}</Content>
          </MemoCard>
        ))
      )}
    </MemoWrapper>
  );
};

export default Board;
