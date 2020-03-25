import React, { Component } from 'react';
import GuessForm from './guessForm';

class Game extends Component {
    constructor(props) {
        super(props)
        const { min, max } = this.props.game

        this.state = {
            randNum: this.randomNumber(min, max),
            guess: "",
            guesses: []
        }
    }

    handleSubmit = guess => {
        let guesses = this.state.guesses;
        guesses.push(guess)
        this.setState({ guesses, guess: "" })
        if(guess == this.state.randNum) {
            alert('Correct');
            this.props.onLevelUp(this.props.game)
        } 
        else {
            alert('Try Again');
        }
    }

    handleGuessChange = (event) => {
        this.setState({
            guess: event.target.value
        })
    }

    render() { 
        const { game, onReset } = this.props
        
        return (  
            <div>
                <h5>Level {game.level}</h5>{ this.state.randNum }
                <p>Guess the number between {game.min} and {game.max}</p>
                < GuessForm onSubmit={this.handleSubmit} guess={this.state.guess} onChange={this.handleGuessChange}/>
                <span className={ this.getBatchClasses() }>{this.formatCount()}</span>
                <button onClick={ () => onReset(this.props.game) } className="btn btn-danger btn-sm m-2">Reset</button>
                <h6>Your Previous Guesses: </h6>
                { this.state.guesses.map(guess => 
                    <span>{guess} </span>
                )}
            </div>
        );
    }

    randomNumber(min, max) {
        min = Math.ceil(min); 
        max = Math.floor(max); 
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

    getBatchClasses() {
        let classes = "badge m-2 badge-"
        classes += this.props.game.score === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { score } = this.props.game;
        return score === 0 ? 'Zero' : score;
    }
}
 
export default Game;