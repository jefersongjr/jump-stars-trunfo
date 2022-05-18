import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <div className="Card">
        <div id="nameDiv">
          <p data-testid="name-card">{ cardName }</p>
        </div>
        <div id="imageDiv">
          <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        </div>
        <div id="descriptionDiv">
          <p data-testid="description-card">{ cardDescription }</p>
        </div>
        <div id="atrrDiv">
          <div className="attrBorder">
            <p>Ataque: </p>
            <p data-testid="attr1-card">{cardAttr1}</p>
          </div>
          <div className="attrBorder">
            <p>Defesa: </p>
            <p data-testid="attr2-card">{ cardAttr2 }</p>
          </div>
          <div className="attrBorder">
            <p>Inteligência: </p>
            <p data-testid="attr3-card">{ cardAttr3 }</p>
          </div>
        </div>
        <p data-testid="rare-card">{ cardRare }</p>
        {cardTrunfo
          ? <p data-testid="trunfo-card">Super Trunfo</p> : <p>{ cardRare }</p>}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
