/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

//이거는 emotion의 styled api방식

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
`;

export const Input = styled.input`
  padding: 12px 16px;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #fa451e;
    box-shadow: 0 0 8px #fa451e66;
  }
`;

export const Textarea = styled.textarea`
  padding: 12px 16px;                  //상하 12, 좌우 16
  margin: 16px 0px 12px 0px ;         //상,우,하,좌
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  resize: vertical;
  min-height: 100px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #fa451e;
    box-shadow: 0 0 8px #fa451e66;
  }
`;

export const Button = styled.button`
  align-self: flex-end;
  padding: 10px 28px;
  background-color: #fa451e;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.25s ease;

  &:hover {
    background-color: #d03815;
  }
`;
