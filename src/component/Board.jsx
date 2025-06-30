import React from "react";
import "../assets/styles/Board.css";

const Board = ({ memoList }) => {
  return (
    <div className="memo-wrapper">
      {memoList.length === 0 ? (
        <p className="empty-message">등록된 메모가 없습니다.</p>
      ) : (
        memoList.map((memo) => (
          <div className="memo-card" key={memo.id}>
            <h2>{memo.title}</h2>
            <p className="date">{memo.date}</p>
            <p>{memo.content}</p>
          </div>
        ))
      )}
      <p className="lol">📝 메모</p>
    </div>
  );
};

export default Board;
