//import logo from './logo.svg';
import React from 'react';
import './App.css';
import json from './Jsondata.json';

function App() {
  return (
    <div className="App">
      <header>
        <h1>FED React: Assignment 2: Multiple Components, JSON</h1>
      </header>
      <hr></hr>
      <Songslist> </Songslist>
    </div>
  );
}
class Allsongs extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <div>
        <header className = "Allsongs">
          <h2>Display Song info using JSON memory</h2>
          <h4>No. of songs in the Playlist: {this.props.jsonlength}  </h4>
        </header>
        <hr></hr>
      </div>
    );
  }
}
class Songslist extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      Movie : '',
      Title : '',
      SongLength : '',
      Singer : '',
      jsonlength : json.length,
      json: []
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    let json = [...this.state.json];

    json.push({
      Movie: this.state.Movie,
      Title: this.state.Title,
      SongLength: this.state.SongLength,
      Singer: this.state.Singer
    });
    let jsonlength = this.state.jsonlength;
    this.setState({jsonlength :  jsonlength + 1});

    this.setState({
      json,
      Movie: '',
      Title: '',
      SongLength: '',
      Singer: ''
    });
  };
  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;
    this.setState({
      [name]: value
    })
  };

  render() {
    return (
      <div className="App">
        <Allsongs handleInputChange={ this.handleInputChange }
          jsonlength = {this.state.jsonlength} />
        <Table json={ this.state.json } />
        <Form handleFormSubmit={ this.handleFormSubmit } 
          handleInputChange={ this.handleInputChange }
          newMovie={ this.state.Movie }
          newTitle={ this.state.Title }
          newSongLength={ this.state.SongLength }
          newSinger={ this.state.Singer } />
       
      </div>
    );
  }
}
class Form extends React.Component {
  render() {
    return (
      <div id="Form">
        <h3>Add a new Song to the table:</h3>  
        <form onSubmit={this.props.handleFormSubmit}>

          <input id="Movie" value={this.props.newMovie} 
            type="text" name="Movie"
            onChange={this.props.handleInputChange} />
          <label htmlFor="Movie"> Movie </label>
          <br />
          
          <input id="Title" value={this.props.newTitle} 
            type="text" name="Title"
            onChange={this.props.handleInputChange} />
          <label htmlFor="Title"> Title </label>
          <br />
          
          <input id="SongLength" value={this.props.newSongLength} 
            type="text" name="SongLength"
            onChange={this.props.handleInputChange} />
          <label htmlFor="SongLength"> SongLength </label>
          <br />
          
          <input id="Singer" value={this.props.newSinger} 
            type="text" name="Singer"
            onChange={this.props.handleInputChange} />
          <label htmlFor="Singer"> Singer </label>
          <br />
          <button type="submit" value="Submit">Add Item</button>
        </form>
      </div>
    );
  }
}

class Table extends React.Component {
  render() {
    const jsons = this.props.json;
    return (
      <div id="Table">
        <table>
          <tbody>
            <tr>
              <th>Movie</th>
              <th>Title</th>
              <th>Song Length</th>
              <th>Singer</th>
            </tr>
            {json.map(item => {
            return (
              <tr>
                <td>{item.Movie}</td> 
                <td>{item.Title}</td> 
                <td>{item.SongLength}</td>
                <td>{item.Singer}</td>
              </tr>
            );
          })}
            {jsons.map(item => {
              return (
                <tr>
                  <td>{item.Movie}</td>
                  <td>{item.Title}</td>
                  <td>{item.SongLength}</td>
                  <td>{item.Singer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
