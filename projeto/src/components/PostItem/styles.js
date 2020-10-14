import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 75px;
  border: 1px solid #ccc;

  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 8px;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 8px;
  cursor: pointer;

  &:hover {
    border: 2px solid #aaa;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
`;

export const Details = styled.div`
  color: #666;

  font-size: 14px;

  span + span {
    margin-left: 16px;
  }
`;
