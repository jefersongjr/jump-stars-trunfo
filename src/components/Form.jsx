import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import Button from './Button';
import Card from './Card';

class Form extends React.Component {
   state = {
     cardName: '',
     cardDescription: '',
     cardAttr1: 0,
     cardAttr2: 0,
     cardAttr3: 0,
     cardImage: '',
     cardTrunfo: false,
     cardRare: '',
   }

   onInputChange = ({ target }) => {
     const { name } = target;
     const value = (target.type === 'checkbox') ? target.checked : target.value;
     this.setState({ [name]: value });
   }

   render() {
     const { cardName, cardDescription, cardAttr1, cardAttr2 } = this.state;
     const { cardAttr3, cardImage, cardTrunfo, cardRare } = this.state;
     const { onInputChange } = this;
     return (
       <section className="section-form">
         <form action="">

           <Input
             type="text"
             label="Nome"
             name="cardName"
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
             test="attr1-input"
             value={ cardAttr1 }
             onInputChange={ onInputChange }
           />

           <Input
             type="number"
             label="Attr2"
             name="cardAttr2"
             test="attr2-input"
             value={ cardAttr2 }
             onInputChange={ onInputChange }
           />

           <Input
             type="number"
             label="Attr3"
             name="cardAttr3"
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
         <Card
           onInputChange={ onInputChange }
         />
       </section>
     );
   }
}

export default Form;
