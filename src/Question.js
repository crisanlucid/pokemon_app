import React from 'react';
import {IS_CONTENTFUL, IS_POKEMON, COMPARE_TO, POKEMON} from './constants';

const Question = ({question, selectAnswer}) => {
  const selectBigDataAnswer = () => {
    selectAnswer(IS_CONTENTFUL);
  };
  const selectPokemonAnswer = () => {
    selectAnswer(IS_POKEMON);
  };

  return (
    <div className='question'>
      <h1 className='question-name'>{question.name}</h1>
      <ul className='question-buttons'>
        <li>
          <button
            className='btn btn-lg btn-outline-secondary question-button'
            onClick={selectBigDataAnswer}>
            {COMPARE_TO}
          </button>
        </li>
        <li>
          <button
            className='btn btn-lg btn-outline-secondary question-button-pokemon'
            onClick={selectPokemonAnswer}>
            {POKEMON}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Question;
