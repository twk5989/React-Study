import { useMemoStore } from "../store/MemoList";
import styled from "styled-components";

const MemoElem = ({ id, children }) => {
  const removeMemo = useMemoStore((state) => state.removeMemo);

  return (
    <div>
      {children}
      <button onClick={() => removeMemo(id)}>삭제</button>
    </div>
  );
};

export default MemoElem;



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
