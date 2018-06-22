import React, { Component } from 'react';
import './Game.css';
import GuessList from './GuessList';

export default class Game extends React.Component {
  constructor(props){
    super(props)

    this.state = {
			guessLog: [],
			guessFeedback: 'Make Your Guess!',
			guessCount: 0,
			correctGuess: Math.floor(Math.random() * 100)
		};
  }

	restartGame() {
		this.setState = ({
			guessLog: [],
			guessFeedback: 'Make Your Guess!',
			guessCount: 0,
			correctGuess: Math.floor(Math.random() *100)
		});
	}

	guessNumber() {
		let guessNum = parseInt(guessNum, 10);
		if(isNaN(guessNum)) {
			this.setState({feedback: 'Enter a valid number'});
			return;
		} 
		else if(guessNum <=0) {
			this.setState({feedback: 'Enter a positive number'});
			return;
		}

		const difference = (guessNum - this.state.correctGuess);

		let feedback = '';
		if (difference >= 50) {
			feedback = 'Too Cold, try again.'
		}
		else if (difference >= 30) {
			feedback = 'Cold, try again'
		}			
		else if (difference >= 10) {
			feedback = 'Warm, try again'
		}			
		else if (difference >= 1) {
			feedback = 'Very warm, almost there!'
		}	
		else {
			feedback = 'Congratulations, you got it!'
		}

		this.setState({
			feedback, guessLog: this.state.guessLog //this needs to populate with the user's guesses
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const value = this.userGuess.value;
		console.log(value);

	}
	



  render() {
    return (
      <div>
      <header>
			<nav> 
				<ul className="clearfix">
					<li><a className="what" href="#">What ?</a></li>
					<li><a className="new" href="#">+ New Game</a></li>
				</ul>
			</nav>
		
			<div className="overlay" id="modal">
				<div className="content">
					<h3>What do I do?</h3>
					<div>
						<p>This is a Hot or Cold Number Guessing Game. The game goes like this: </p>
						<ul>
							<li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
							<li>2. You need to <strong>guess</strong> until you can find the hidden secret number.</li>
							<li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
						</ul>
						<p>So, Are you ready?</p>
						<a className="close" href="#">Got It!</a>
					</div>
				</div>
			</div>

			
			<h1>HOT or COLD</h1>

		</header>

		<section className="game">
			
			<h2 id="feedback">Make your Guess!</h2>

			<form onSubmit = {this.handleSubmit}>
				<input type="text" name="userGuess" ref={input => this.userGuess = input} id="userGuess" className="text" maxlength="3" autocomplete="off" placeholder="Enter your Guess" required/>
      			<input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
			</form>
			
      		<p>Guess #<span id="count">Placeholder</span>!</p>
			
			<ul id="guessLog" className="guessBox clearfix">
				<GuessList guessLog = {[this.state.guessLog]} /> 
			</ul>

		</section>
    </div>
    )
  }
}
