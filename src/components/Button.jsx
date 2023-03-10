import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { isSaveButtonDisabled, onSaveButtonClick } = this.props;
    return (
      <button
        type="button"
        data-testid="save-button"
        disabled={ isSaveButtonDisabled }
        onClick={ onSaveButtonClick }
      >
        Salvar
      </button>
    );
  }
}

Button.propTypes = {
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Button;
