import { useMemoStore } from "../store/MemoList";
import "../assets/styles/Input.css";

const MemoInput = () => {
  const {
    title,
    date,
    content,
    setTitle,
    setDate,
    setContent,
    addMemo,
  } = useMemoStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addMemo(); // ✅ store에서 상태 가져와서 처리
  };

  return (
    <form className="memo-form" onSubmit={handleSubmit}>
      <div className="form-wrapper">
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)} // ✅ store setter 사용
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
