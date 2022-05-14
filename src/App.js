import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <section>
        <Form />
        <Card />
      </section>
    );
  }
}

export default App;
