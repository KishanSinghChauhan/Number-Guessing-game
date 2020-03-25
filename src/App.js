import React, { Component } from 'react';
import NavBar from './components/navBar';
import Games from './components/games'
import './App.css';

class App extends Component {
  state = { 
    games: [
      { level: 1, min: 1, max: 100, guesses: [] }
    ]
  };

  handleLevelUp = game => {
    if (this.state.games.length === game.level){
      const newGame = {
        level: game.level + 1, 
        min: 1, 
        max: game.max + 100,
        guesses: []
      }
      let games = [...this.state.games];
      games.push(newGame);
      this.setState({ games })
    }
  };

  handleGuesses = (game, guess) => {
    const games = [...this.state.games];
    const index = games.indexOf(game);
    games[index] = { ...game };
    games[index].guesses.push(guess)
    this.setState({ games });
  };

  handleReset = game => {
    const games = [...this.state.games];
    const index = games.indexOf(game);
    games[index] = { ...game };
    games[index].guesses = [];
    this.setState({ games });
  };

  render() { 
    return ( 
      <React.Fragment>
        <NavBar totalGames={this.state.games.length} />
        <main className="container">
          <Games
            games={this.state.games}
            onReset={this.handleReset}
            onLevelUp={this.handleLevelUp}
            onGuess={this.handleGuesses}
          />
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;