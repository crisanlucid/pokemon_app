import React from 'react';
import clsx from 'clsx';

const EndScreen = props => {
  const percent = Math.round(
    (props.correctAnswers / props.questionList.length) * 100,
  );
  const classes = clsx({
    'progress-bar': true,
    'progress-bar-danger': percent < 20,
    'progress-bar-warning': percent >= 20 && percent < 50,
    'progress-bar-info': percent >= 50 && percent < 80,
    'progress-bar-success': percent >= 80,
  });
  const style = {
    width: percent + '%',
  };
  return (
    <div className='endscreen'>
      <h1 className='endscreen-title'>
        Congratulations, you got {percent}% correct!
      </h1>
      <div className='progress' style={{height: '20px'}}>
        <div
          className={classes}
          style={style}
          role='progressbar'
          aria-valuemin='0'
          aria-valuemax='100'
        />
      </div>
      <div className='text-center mt-4'>
        <button
          className='btn btn-lg btn-primary answer-button-next'
          onClick={props.onReset}>
          <span className='blinking'>Insert coin</span>
        </button>
      </div>
    </div>
  );
};

export default EndScreen;
