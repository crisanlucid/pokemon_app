import React from 'react';
import {IS_POKEMON, POKEMON, COMPARE_TO} from '../constants';

const Answer = props => {
  const classes = {
    answer: true,
    'answer-correct bg-success': props.isAnswerCorrect,
    'answer-incorrect bg-danger': !props.isAnswerCorrect,
  };
  const img = './img/' + props.question.img;
  const name = props.question.name;
  const url = props.question.url;
  const text = props.question.text;
  const type = props.question.type === IS_POKEMON ? POKEMON : COMPARE_TO;
  return (
    <div className={classes}>
      <h1 className='answer-name'>
        <a href={url} target='_blank' rel='noopener noreferrer'>
          {name}
        </a>{' '}
        is {type}!
      </h1>
      <div className='answer-picture'>
        <img src={img} alt={name} />
      </div>
      <div className='answer-text'>{text}</div>
      <div className='answer-next'>
        <button
          className='btn btn-lg btn-primary answer-button-next'
          onClick={props.nextQuestion}>
          Next question
        </button>
      </div>
    </div>
  );
};

export default Answer;
