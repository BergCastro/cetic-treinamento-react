import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 120px;
  border: 1px solid #ccc;

  display: flex;
  flex-direction: column;
  border-radius: 4px;
  width: 260px;
`;

export const Title = styled.h5`
  background: #e5e5e5;
  height: 35px;
  font-weight: 400;
  display: flex;
  align-items: center;
  padding-left: 16px;
  font-size: 16px;
  border-radius: 4px 4px 0 0;
`;

export const Content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
