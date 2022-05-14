import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
    state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardTrunfo: false,
      cardRare: '',
      isSaveButtonDisabled: true,
    }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({ [name]: value });

    this.setState(() => ({
      isSaveButtonDisabled: true,
    }), this.validateButton);
  }

  validateButton = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage } = this.state;
    const max = 90;
    const attrSum = cardAttr1 + cardAttr2 + cardAttr3;
    const maxSum = 210;
    if (attrSum > maxSum) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
    if (cardName !== '' && cardImage !== '' && cardDescription !== '') {
      this.setState({
        isSaveButtonDisabled: false,
      });
    }
    if (cardAttr1 > max || cardAttr2 > max || cardAttr3 > max) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
    if (cardAttr1 < 0 || cardAttr2 < 0 || cardAttr3 < 0) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  onSaveButtonClick = () => 'ola';

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2 } = this.state;
    const { cardAttr3, cardImage, cardTrunfo, cardRare,
      isSaveButtonDisabled } = this.state;
    const { onInputChange, onSaveButtonClick } = this;
    return (
      <section>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardTrunfo={ cardTrunfo }
          cardRare={ cardRare }
          onInputChange={ onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ onSaveButtonClick }
        />

        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardTrunfo={ cardTrunfo }
          cardRare={ cardRare }
        />
      </section>
    );
  }
}

export default App;
