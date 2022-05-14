import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, type, test, label, value, onInputChange } = this.props;
    return (
      <label htmlFor={ label }>
        { label }
        <input
          name={ name }
          type={ type }
          id={ name }
          data-testid={ test }
          value={ value }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Input;
