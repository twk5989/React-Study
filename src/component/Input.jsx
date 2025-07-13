import { useMemoStore } from "../store/MemoList";
import { AddMemoForm, Input, Textarea, SubmitButton } from "../assets/styles/Input.styles.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const MemoInput = () => {
  const { addMemo } = useMemoStore();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate(); //페이지 이동 함수

  const handleSubmit = (e) => {
    e.preventDefault();

    //유효성 검사 넣음
    if (!title || !date || !content) return alert("모든 항목을 입력해주세요");

    //확인 팝업
    const isConfirmed = window.confirm("메모를 등록하시겠습니까?");
    if (!isConfirmed) {
    return;
     }
    //등록
    addMemo({ title, date, content });

    // 초기화
    setTitle("");
    setDate("");
    setContent("");

    alert("메모가 등록되었습니다!");
    navigate("/detail"); //완료 누르면 detail 페이지로 감
  };

  return (
    <AddMemoForm onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <textarea
          placeholder="상세 내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">저장</button>
      </div>
    </AddMemoForm>
  );
};

export default MemoInput;