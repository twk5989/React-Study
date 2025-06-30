import { create } from "zustand";  // store를 생성하는 create 함수

export const useMemoStore = create((set) => ({  // 객체 형태의 함수를 반환하는 store 생성
  memoList: [],
  title: "",
  date: "",
  content: "", //빈 문자열 생성

  // 입력값 수정용 setter
  setTitle: (value) => set({ title: value }),
  setDate: (value) => set({ date: value }),
  setContent: (value) => set({ content: value }),

  //상태를 조작할 액션 함수
  addMemo: () =>
    set((state) => ({
      memoList: [
        ...state.memoList,
        {
          id: new Date().getTime(),
          title: state.title,
          date: state.date,
          content: state.content,
        },
      ],
      // 입력 필드 초기화까지 함께
      title: "",
      date: "",
      content: "",
    })),

  //아이디를 입력 받아서 기존에 존재하는 배열을 필터에 일치하지 않는것만 남겨둔다.= 삭제
  removeMemo: (id) =>
    set((prev) => ({
      memoList: prev.memoList.filter((e) => e.id !== id),
    })),
}));
