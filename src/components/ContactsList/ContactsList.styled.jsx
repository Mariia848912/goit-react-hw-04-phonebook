import styled from 'styled-components';

export const List = styled.ul`
  width: 400px;
  margin-left: 20px;
  list-style-position: inside;
`

export const ItemContact = styled.li`
 &:not(:last-child) {
  margin-bottom: 10px;
}
`

export const Button = styled.button`
  width: 60px;
  padding: 3px 0;
  margin-left: 13px;

  border: 1px solid #c0c0c0;
  border-radius: 5px;

  cursor: pointer;

  &:hover {
  background-color: #188ce8;

  border: 1px solid #188ce8;
  outline: rgba(0, 0, 0, 0);
  }
`