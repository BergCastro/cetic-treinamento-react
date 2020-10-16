import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px 8% 0;
  display: flex;
  flex-direction: row;
`;


export const Content = styled.div`
  width: 100%;
  
`;



export const Body = styled.div`
  width: 100%;
  color: #333;
  line-height: 18px;
  margin-top: 16px;
`;

export const Filters = styled.div`
  margin-left: 20px;

  > div + div {
    margin-top: 16px;
  }
`;