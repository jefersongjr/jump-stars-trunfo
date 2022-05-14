import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, type, test, label, checked, onInputChange, id } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <input
          name={ name }
          type={ type }
          id={ id }
          data-testid={ test }
          checked={ checked }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Input;
