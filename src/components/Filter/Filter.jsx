import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Label, LabelText, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  const filterInputId = nanoid();
  return (
    <Label htmlFor={filterInputId}>
      <LabelText>Find contacts by name</LabelText>
      <Input type="text" value={value} id={filterInputId} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
