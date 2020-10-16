import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;

  height: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  label {
    color: #333;
    margin-top: 8px;

  }

 

  input {
    height: 35px;
    width: 100%;
    border: 1px solid  #ddd;
    padding-left: 8px;
    padding-right: 8px;
  }

  textarea {
    height: 70px;
    width: 100%;
    border: 1px solid  #ddd; 
    padding-left: 8px;
    padding-right: 8px;
  }
  
  button {
    margin-top: 30px;
    height: 35px;
  }

  span {
    color: red;
  }

  select {
    height: 35px;
    width: 100%;
    

    option {
      height: 35px;
    }
  }
  
`;


