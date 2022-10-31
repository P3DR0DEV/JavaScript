import React, { Component } from 'react';
import './Main.css';

export default class Main extends Component {
  state = {
    novaTarefa: '',
  };

  handleInputChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  render() {
    const { novaTarefa } = this.state;

    return (
      <div className="main">
        <h1>To Do List</h1>

        <form action="#">
          <input type="text" onChange={this.handleInputChange} />
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
