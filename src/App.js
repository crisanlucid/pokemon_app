import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Answer from './components/Answer';
import EndScreen from './components/EndScreen';
import Question from './components/Question';
import SplashScreen from './components/SplashScreen';
import data from './data/questions.json';

var APP_STATES = {
  LOADING: 1,
  QUESTION: 2,
  ANSWER: 3,
  FINISHED: 4,
};

function App() {
  const [currentState, setCurrentState] = useState(APP_STATES.LOADING);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [questionList, setQuestionList] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isLastAnswerCorrect, setIsLastAnswerCorrect] = useState(null);

  useEffect(() => {
    // Load question data from the server
    let questions = data;
    setCurrentState(APP_STATES.QUESTION);
    setQuestionList(questions);
    setCurrentQuestion(questions[0]);
  }, []);

  const selectAnswer = answerType => {
    const isCorrect = currentQuestion.type === answerType;
    let tmpCorrectAnswers = correctAnswers;

    if (isCorrect) {
      tmpCorrectAnswers++;
    }

    setCurrentState(APP_STATES.ANSWER);
    setCorrectAnswers(tmpCorrectAnswers);
    setIsLastAnswerCorrect(isCorrect);
  };

  const resetQuizHandler = () => {
    setCurrentState(APP_STATES.QUESTION);
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setCurrentQuestion(questionList[0]);
  };

  const nextQuestion = () => {
    var newIndex = currentQuestionIndex + 1;

    // End of the game
    if (newIndex === questionList.length) {
      setCurrentState(APP_STATES.FINISHED);
      return;
    }

    setCurrentState(APP_STATES.QUESTION);
    setCurrentQuestionIndex(newIndex);
    setCurrentQuestion(questionList[newIndex]);
  };

  switch (currentState) {
    case APP_STATES.LOADING:
      return <SplashScreen />;
    case APP_STATES.QUESTION:
      return (
        <Question selectAnswer={selectAnswer} question={currentQuestion} />
      );
    case APP_STATES.ANSWER:
      return (
        <Answer
          nextQuestion={nextQuestion}
          question={currentQuestion}
          isAnswerCorrect={isLastAnswerCorrect}
        />
      );
    case APP_STATES.FINISHED:
      return (
        <EndScreen
          correctAnswers={correctAnswers}
          questionList={questionList}
          onReset={resetQuizHandler}
        />
      );
    default:
      return <div>Default value</div>;
  }
}

export default App;
