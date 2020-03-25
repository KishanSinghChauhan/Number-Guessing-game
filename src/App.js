import React, { Component } from 'react';
import NavBar from './components/navBar';
import Games from './components/games'
import './App.css';

class App extends Component {
  state = { 
    games: [
      { level: 1, score: 0 }
    ]
  }

  handleIncrement = game => {
    const games = [...this.state.games];
    const index = games.indexOf(game)
    games[index] = { ...game };
    games[index].score++;
    this.setState({ games })
  };

  handleReset = () => {
    const games = this.state.games.map(g => {
      g.score = 0;
      return g;
    });
    this.setState({ games })
  };

  handleDelete = gameLevel => {
    const games = this.state.games.filter(g => g.level !== gameLevel);
    this.setState({ games })
  };

  render() { 
    return ( 
      <React.Fragment>
        <NavBar totalGames={this.state.games.filter(g => g.score > 0).length} />
        <main className="container">
          <Games
            games={this.state.games}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;