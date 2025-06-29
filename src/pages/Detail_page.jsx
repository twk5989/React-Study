import React from "react";
import { useMemoStore } from "../store/MemoList";
import Board from "../component/Board";

const Detail = () => {
  const { memoList } = useMemoStore();

  return (
    <div>
      <h1>메모 상세 보기</h1>
      <Board memoList={memoList} />
    </div>
  );
};

export default Detail;
