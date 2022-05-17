import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  render() {
    const { name, test, value, onInputChange } = this.props;
    return (
      <label htmlFor={ name }>
        Descrição
        <textarea
          id={ name }
          name={ name }
          value={ value }
          cols="30"
          rows="10"
          className="Input"
          data-testid={ test }
          onChange={ onInputChange }
        />
      </label>
    );
  }
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,

};

export default Textarea;
