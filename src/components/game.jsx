import React, { Component } from 'react';
import GuessForm from './guessForm';

class Game extends Component {
    constructor(props) {
        super(props)
        const { min, max } = this.props.game

        this.state = {
            randNum: this.randomNumber(min, max),
            guess: "",
            status: "Let's Start"
        }
    }

    handleSubmit = guess => {
        const { game, onGuess, onLevelUp } = this.props;
        this.setState({ status: this.formatGuessStatus(this.state.randNum, this.state.guess) })
        onGuess(game, guess)
        this.setState({ guess: "" })
        if(guess == this.state.randNum) {
            alert('Correct');
            this.setState({ randNum: this.randomNumber(game.min, game.max) });
            onLevelUp(game)
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
        const { guess, status } = this.state

        return (
            <div>
                <h5>Level {game.level}</h5>
                <p>Guess the number between {game.min} and {game.max}</p>
                < GuessForm onSubmit={this.handleSubmit} guess={guess} onChange={this.handleGuessChange}/>
                <button onClick={ () => onReset(game) } className="btn btn-outline-primary btn-sm m-2">Reset</button>
                <span className={ this.getBatchClasses() }>{status}</span>
                <h6>Your Previous Guesses: { game.guesses.map(guess => 
                    <span>{guess} </span>)}</h6>
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
        classes += this.state.status == "Great Job" ? "success" : "warning";
        return classes;
    }

    formatGuessStatus(randNum, guess) {
        let dif = Math.abs( randNum - guess ); 
        if ( dif === 0 ) {
            return "Great Job";
        }
        else {
            return "Try Again";
        }
    }
}
 
export default Game;