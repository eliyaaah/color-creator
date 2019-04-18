import React, { Component } from 'react';
import './App.css';

// We will have to add 2 custom components:
import ColorForm from './components/ColorForm.js';
import ColorCard from './components/ColorCard.js';
// ColorCard (for displaying a color combo)

class App extends Component {
  constructor() {
    super();

    this.state = {
      colors: []
    }
  }


  updateColors = (colorObj) =>  {

    const newColors = [...this.state.colors ];
    newColors.push(colorObj);

    this.setState({
      colors: newColors
    });
  }


  renderColors() {
    const colorsHtml = this.state.colors.map((color, index) => {
      return  (
        <ColorCard
          key={ index }
          name = { color.name }
          background={ color.background }
          foreground={ color.foreground }/>
      );
    });
    return colorsHtml;
  }

  renderPlaceholder() {
    return <p>Add a color using the form above</p>;
  }

  render() {
    return (
      <div className="App wrapper">
        <header className="App-header">
          <h1>Color Creator</h1>
          <ColorForm updateColors={ this.updateColors }/>
        </header>
        <main>
          {
            this.state.colors.length
            ? this.renderColors()
            : this.renderPlaceholder()
          }
        </main>
      </div>
    );
  }
}

export default App;
