import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 16px;
  input {
    margin-top: 5px;
    margin-bottom: 10px;
  }
  button {
    margin-top: 10px;
  }
`;
