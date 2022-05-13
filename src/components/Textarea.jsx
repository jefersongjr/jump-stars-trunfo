import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  render() {
    const { name, test } = this.props;
    return (
      <label htmlFor={ name }>
        { name }
        <textarea id={ name } cols="30" rows="10" data-testid={ test } />
      </label>
    );
  }
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,

};

export default Textarea;
