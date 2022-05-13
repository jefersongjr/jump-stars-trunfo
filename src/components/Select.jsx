import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { name, test } = this.props;
    return (
      <label htmlFor={ name }>
        { name }
        <select id={ name } data-testid={ test }>
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

};

export default Select;
