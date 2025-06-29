import { create } from "zustand";  // store를 생성하는 create 함수

export const useMemoStore = create((set) => ({  // 객체 형태의 함수를 반환하는 store 생성
  memoList: [],

  //상태를 조작할 액션 함수
  addMemo: ({ title, date, content }) =>
    set((prev) => ({
      memoList: [
        ...prev.memoList,
        { 
          id: new Date().getTime(),
          title,
          date,
          content,
         },
      ],
    })),
  //아이디를 입력 받아서 기존에 존재하는 배열을 필터에 일치하지 않는것만 남겨둔다
  removeMemo: (id) =>
    set((prev) => ({
      memoList: prev.memoList.filter((e) => e.id !== id),
    })),
}));
