import { create } from "zustand";  // store를 생성하는 create 함수

export const useMemoStore = create((set) => ({  // 객체 형태의 함수를 반환하는 store 생성
  memoList: [],

  addMemo: ({ title, date, content, author }) =>
    set((prev) => ({
      memoList: [
        ...prev.memoList,
        {
          id: Date.now(),
          title,
          date,
          content,
          author,
        },
      ],
    })),

  //아이디를 입력 받아서 기존에 존재하는 배열을 필터에 일치하지 않는것만 남겨둔다.= 삭제
  removeMemo: (id) =>
    set((prev) => ({
      memoList: prev.memoList.filter((e) => e.id !== id),
    })),
}));
export const AddMemoForm = styled.form`
  max-width: 420px;
  margin: 24px auto;
  padding: 24px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgb(0 0 0 / 0.1);
  display: flex;
  flex-direction: column;
  gap: 16px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

