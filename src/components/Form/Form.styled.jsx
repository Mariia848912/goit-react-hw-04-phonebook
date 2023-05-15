import styled from 'styled-components';
import { Form, Field } from 'formik';

export const FormPhonebook = styled(Form)`
  margin: 20px 0;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
  width: 400px;

  border: 1.5px solid #000000;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const LabelText = styled.span`
  display: inline-block;
  margin-bottom: 7px;
`;

export const Input = styled(Field)`
  width: 170px;
  margin-bottom: 15px;
  padding: 5px;

  border: 1px solid #c0c0c0;

  &:focus {
    border: solid 1.5px #188ce8;
    outline: rgba(0, 0, 0, 0);
  }
`;

export const ButtonSubmit = styled.button`
  width: 90px;
  padding: 3px 0;

  border: 1px solid #c0c0c0;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #188ce8;

    border: 1px solid #188ce8;
    outline: rgba(0, 0, 0, 0);
  }
`;

