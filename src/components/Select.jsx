import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { name, test, value, onInputChange } = this.props;
    return (
      <label htmlFor={ name }>
        Raridade
        <select
          id={ name }
          data-testid={ test }
          value={ value }
          className="Input"
          onChange={ onInputChange }
        >
          <option> normal </option>
          <option> raro </option>
          <option> muito raro </option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Select;
