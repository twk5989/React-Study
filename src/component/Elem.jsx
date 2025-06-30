import React from "react";
import { useMemoStore } from "../store/MemoList";
import MemoElem from "../component/Elem";
import styled from "styled-components";


const Detail = () => {
  const { memoList } = useMemoStore();

  return (
    <div>
      <h1>메모 상세 보기</h1>
      {memoList.length === 0 ? (
        <p>등록된 메모가 없습니다.</p>
      ) : (
        memoList.map((memo) => (
          <MemoElem key={memo.id} id={memo.id}>
            <div>
              <h2>{memo.title}</h2>
              <p>{memo.date}</p>
              <p>{memo.content}</p>
            </div>
          </MemoElem>
        ))
      )}
    </div>
  );
};

export default Detail;


const RemoveButton = styled.button`
  padding: 4px 8px;
  background-color: tomato;
  color: white;
  border: none;
  border-radius: 4px;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
  font-size: 12px;
`;
