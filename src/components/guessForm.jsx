import React, { Component } from 'react';

class GuessForm extends Component {
    render() {
        const { guess, onChange, onSubmit } = this.props
        return (
            <React.Fragment>
                <div className="form-group">
                    <label htmlFor="userGuess">Guess The Number:</label>
                    <input type="text" className="form-control" value={guess} onChange={(event) => onChange(event)} />
                </div>
                <button className="btn btn-primary btn-sm" onClick={() => onSubmit(guess)}>Submit Guess</button>
            </React.Fragment>
        );
    }
}

export default GuessForm;