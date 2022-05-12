import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <section className="section-form">
        <form>
          <label htmlFor="name">
            Nome:
            <input type="text" id="name" data-testid="name-input" />
          </label>

          <label htmlFor="description">
            Descrição:
            <textarea
              id="description"
              cols="30"
              rows="10"
              data-testid="description-input"
            />
          </label>

          <label htmlFor="attr1">
            Attr1:
            <input type="number" id="attr1" data-testid="attr1-input" />
          </label>

          <label htmlFor="attr2">
            Attr2:
            <input type="number" id="attr2" data-testid="attr2-input" />
          </label>

          <label htmlFor="attr3">
            Attr3:
            <input type="number" id="attr3" data-testid="attr3-input" />
          </label>

          <label htmlFor="image">
            Imagem:
            <input type="text" id="image" data-testid="image-input" />
          </label>

          <label htmlFor="rare">
            Raridade:
            <select id="rare" data-testid="rare-input">
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>

          <label htmlFor="super">
            <input type="checkbox" id="super" data-testid="trunfo-input" />
            Super Trunfo
          </label>

          <button
            type="submit"
            id="button"
            data-testid="save-button"
          >
            Salvar
          </button>

        </form>

      </section>
    );
  }
}

export default Form;
