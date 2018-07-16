'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Cowsay from 'react-cowsay';
import Header from './components/header/header';
import './style/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstList: [],
      secondList: [],
      firstEntry: '',
      secondEntry: '',
      map: {},
      cowsays: 'This is the default message on page load.',
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState((previousState) => {
      const firstList = previousState.firstList.concat(this.state.firstEntry);
      const secondList = previousState.secondList.concat(this.state.secondEntry);
      const map = Object.assign(this.state.map);
      map[this.state.firstEntry] = true;
      const filtered = secondList.filter(w => map[w]);
      const cowsays = filtered.length ? filtered.join(', ') : this.state.cowsays;
      return {
        firstList,
        secondList,
        firstEntry: '',
        secondEntry: '',
        map,
        cowsays,
      };
    });
  }

  render() {
    return (
      <div className="cowsay">
        <Header></Header>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="firstEntry">Enter some text</label>
          <input
            type="text"
            name="firstEntry"
            onChange={ this.handleInputChange }
            value={ this.state.firstEntry }
            />
          <label htmlFor="secondEntry">Enter some more text</label>
          <input
            type="text"
            name="secondEntry"
            onChange={ this.handleInputChange }
            value={ this.state.secondEntry }
            />
          <button type="submit">Update lists</button>
        </form>
        <ul>
          <h2>First List</h2>
          { this.state.firstList.map((item, idx) => <li key={idx}>{item}</li> ) }
        </ul>
        <ul>
          <h2>Second List</h2>
          { this.state.secondList.map((item, idx) => <li key={idx}>{item}</li> )}
        </ul>
        <pre>
          <Cowsay>{ this.state.cowsays }</Cowsay>
        </pre>
      </div>
    );
  }
}

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);
ReactDOM.render(<App />, rootNode);
