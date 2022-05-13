import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import Button from './Button';

class Form extends React.Component {
   state = {
     cardName: '',
   }

   handleInputChanche = (event) => {
     const { target: { value, name } } = event;
     this.setState({ [name]: value });
   };

   render() {
     const { cardName } = this.state;
     return (
       <section className="section-form">
         <form action="">
           <Input
             type="text"
             label="Nome"
             name="cardName"
             test="name-input"
             cardName={ cardName }
             onInputChange={ this.handleInputChanche }
           />
           <Textarea name="Descrição" test="description-input" />
           <Input type="number" name="Attr1" test="attr1-input" />
           <Input type="number" name="Attr2" test="attr2-input" />
           <Input type="number" name="Attr3" test="attr3-input" />
           <Input type="text" name="Imagem" test="image-input" />
           <Select name="Raridade" test="rare-input" />
           <Input type="checkbox" name="Super Trybe Trunfo" test="trunfo-input" />
           <Button />
         </form>
       </section>
     );
   }
}

export default Form;
