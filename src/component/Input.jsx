import "../assets/styles/Input.css";
import { useMemoStore } from "./../store/MemoList";
import { useState } from "react";

const MemoInput = () => {
  const { addMemo } = useMemoStore();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addMemo({ title, date, content });
    setTitle("");
    setDate("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <textarea
          placeholder="상세 내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">저장</button>
      </div>
    </form>
  );
};

export default MemoInput;