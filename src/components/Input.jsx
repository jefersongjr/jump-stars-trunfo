import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { name, type, test } = this.props;
    return (
      <label htmlFor={ name }>
        { name }
        <input type={ type } id={ name } data-testid={ test } />
      </label>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,

};

export default Input;
