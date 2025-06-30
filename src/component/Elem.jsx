import { useMemoStore } from "../store/MemoList";
import {
  MemoCard,
  Title,
  DateText,
  Content,
  RemoveButton,
} from "../assets/styles/Elem.styles.js";

const MemoElem = ({ id, title, date, content }) => {
  const { removeMemo } = useMemoStore();

  return (
    <MemoCard>
      <RemoveButton onClick={() => {
  if (window.confirm("이 메모를 삭제하시겠습니까?")) {
    removeMemo(id);
  }
}}>✕</RemoveButton>
      <Title>{title}</Title>
      <DateText>{date}</DateText>
      <Content>{content}</Content>

    </MemoCard>
  );
};


export default MemoElem;
