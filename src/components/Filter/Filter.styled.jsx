import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
`;
export const LabelText = styled.span`
  margin-bottom: 3px;
`;
export const Input = styled.input`
  width: 170px;
  margin-bottom: 15px;

  border: 1px solid #c0c0c0;

  &:focus {
    border: solid 1.5px #188ce8;
    outline: rgba(0, 0, 0, 0);
  }
`;
