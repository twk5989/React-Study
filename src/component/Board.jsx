import React from "react";
import "../assets/styles/Board.css";

const Board = ({ memoList }) => {
  return (
    <MemoWrapper>
      {memoList.length === 0 ? (
        <EmptyMessage>등록된 메모가 없습니다.</EmptyMessage>
      ) : (
        memoList.map((memo) => (
          <MemoCard key={memo.id}>
            <h2>{memo.title}</h2>
            <p className="date">{memo.date}</p>
            <p>{memo.content}</p>
          </MemoCard>
        ))
      )}
      <LOL>📝 메모</LOL>
    </MemoWrapper>
  );
};

export default Board;