import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50%;
  background-color: #302929;
  border: none;

  height: 60px;
  width: 60px;

  color: #fff;

  position: absolute;

  right: 30px;
  bottom: 30px;
  font-size: 24px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
