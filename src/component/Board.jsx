import styled from "styled-components";

const Board = ({ memoList }) => {
  return (
    <MemoWrapper>
      {memoList.length === 0 ? (
        <EmptyMessage>등록된 메모가 없습니다.</EmptyMessage>
      ) : (
        memoList.map((memo) => (
          <MemoCard key={memo.id}>
            <h2>{memo.title}</h2>
            <p className="date">{memo.date}</p>
            <p>{memo.content}</p>
          </MemoCard>
        ))
      )}
      <LOL>📝 메모</LOL>
    </MemoWrapper>
  );
};

export default Board;


const MemoWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  padding: 16px;
  width: 800px;
  margin: 0 auto;
  min-height: 240px;
  height: 450px;
  overflow-y: scroll;
  align-items: flex-start;
  justify-content: center;
  border: 14px solid #875a36;
  background-color: #81b771;
`;

const MemoCard = styled.div`
  width: 220px;
  min-height: 150px;
  background-color: #fff;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  h2 {
    font-size: 18px;
    margin-bottom: 4px;
    color: #333;
  }
  .date {
    font-size: 14px;
    color: #777;
    margin-bottom: 8px;
  }
  p {
    font-size: 15px;
    color: #555;
  }
`;

const LOL = styled.span`
  position: absolute;
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  bottom: 50px;
  right: 16px;
  transform: rotate(-8deg);
`;

const EmptyMessage = styled.div`
  font-size: 18px;
  color: white;
  text-align: center;
  margin-top: 100px;
`;
