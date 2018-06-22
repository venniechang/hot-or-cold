import React from 'react';

export default function GuessList(props) {

    const guesses = props.guessLog.map((guess, index) => {
       return <li key = {index}> {guess} </li>
    });

    return(
        <ul id = "guessList">{guesses}</ul>
    )
}
