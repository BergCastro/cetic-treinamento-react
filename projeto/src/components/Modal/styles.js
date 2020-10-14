import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  border-bottom-color: #ddd;
  border-bottom-style: solid;
  border-bottom-width: 1px;

  div {
    font-size: 20px;
    font-weight: 500;
  }

  button {
    background: none;
    border: none;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 24px;
  flex: 1;
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30px;
  margin-top: auto;
  justify-content: space-around;

  /* padding: 8px 24px; */
  align-items: flex-end;
`;
