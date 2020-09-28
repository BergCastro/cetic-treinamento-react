import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  height: 35px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 4px 8px;
  border: none;
  font-size: 14px;
  font-weight: 400;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #999;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: #333;
  color: #ddd;
  font-weight: 500;
  width: 40px;
  cursor: pointer;
  border-radius: 0 4px 4px 0;

  transition: color 0.2s;

  &:hover {
    color: #fff;
  }
`;
