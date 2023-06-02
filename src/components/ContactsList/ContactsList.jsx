import PropTypes from 'prop-types';
import { List, ItemContact, Button } from "./ContactsList.styled";

export const ContactsList = ({ contacts, onClickButtonDelete }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ItemContact key={id} >
          {name}: {number}
          <Button
            type="button"
            onClick={() => onClickButtonDelete(id)}
          >
            Delete
          </Button>
        </ItemContact>
      ))}
    </List>
  );
};
// ksfkkfkd
ContactsList.propTypes = {
  onClickButtonDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
