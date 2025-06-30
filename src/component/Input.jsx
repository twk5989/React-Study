import { useMemoStore } from "../store/MemoList";
import { AddMemoForm, Input, Textarea, SubmitButton } from "../assets/styles/Input.styles.js";
import { useState } from "react";

const MemoInput = () => {
  const { addMemo } = useMemoStore();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 간단한 유효성 검사
    if (!title || !date || !content) return alert("모든 항목을 입력해주세요");

    addMemo({ title, date, content });

    // 초기화
    setTitle("");
    setDate("");
    setContent("");
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