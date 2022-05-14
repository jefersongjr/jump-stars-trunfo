import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import Button from './Button';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2 } = this.props;
    const { cardAttr3, cardImage, cardTrunfo, cardRare, onInputChange } = this.props;
    return (
      <section className="section-form">
        <form>

          <Input
            type="text"
            label="Nome"
            name="cardName"
            id="name-id"
            test="name-input"
            value={ cardName }
            onInputChange={ onInputChange }
          />

          <Textarea
            name="cardDescription"
            test="description-input"
            value={ cardDescription }
            onInputChange={ onInputChange }
          />

          <Input
            type="number"
            label="Attr1"
            name="cardAttr1"
            id="attr1-id"
            test="attr1-input"
            value={ cardAttr1 }
            onInputChange={ onInputChange }
          />

          <Input
            type="number"
            label="Attr2"
            name="cardAttr2"
            id="attr2-id"
            test="attr2-input"
            value={ cardAttr2 }
            onInputChange={ onInputChange }
          />

          <Input
            type="number"
            label="Attr3"
            name="cardAttr3"
            id="attr3-id"
            test="attr3-input"
            value={ cardAttr3 }
            onInputChange={ onInputChange }
          />

          <Input
            type="text"
            label="Imagem"
            name="cardImage"
            test="image-input"
            value={ cardImage }
            onInputChange={ onInputChange }
          />

          <Select
            name="cardRare"
            test="rare-input"
            value={ cardRare }
            onInputChange={ onInputChange }
          />

          <Input
            type="checkbox"
            label="Super Trybe Trunfo"
            id="super-trunfo"
            name="cardTrunfo"
            test="trunfo-input"
            value={ cardTrunfo }
            onInputChange={ onInputChange }

          />
          <Button
            isSaveButtonDisabled={ false }
            onSaveButtonClick={ () => 'ola' }
          />
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Form;
