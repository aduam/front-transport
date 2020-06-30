import styled from 'styled-components';
import Colors from '../Colors';

export const Container = styled.div`
  width: 100%;
  border: 1px solid ${Colors.gray3};
  border-radius: 4px;
  `;

export const Form = styled.form`
  padding: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 5px;
  }
  input {
    margin-bottom: 10px;
  }
`;