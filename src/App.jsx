import React, { useState } from "react";
import "./App.css";

function App() {
  const initialFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackTypes, setFeedbackTypes] = useState(initialFeedback);
  const [feedbackGiven, setFeedbackGiven] = useState(false);

  const handleFeedback = (type) => {
    setFeedbackTypes((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
    setFeedbackGiven(true);
  };

  const resetFeedback = () => {
    setFeedbackTypes(initialFeedback);
    setFeedbackGiven(false);
  };

  return (
    <div className="description">
      <h1 className="description-title">Sip Happens Café</h1>
      <p className="description-paragraph">
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Feedback onFeedback={handleFeedback} />
      {feedbackGiven && <Reset onReset={resetFeedback} />}
      {feedbackGiven && <Options options={feedbackTypes}/>}
      
    </div>
  );
}

function Feedback({ onFeedback }) {
  return (
    <div className="option">
      <button onClick={() => onFeedback("good")}>Good</button>
      <button onClick={() => onFeedback("neutral")}>Neutral</button>
      <button onClick={() => onFeedback("bad")}>Bad</button>
    </div>
  );
}

function Options({ options }) {

  const totalFeedback = options.good + options.bad + options.neutral;

  const positiveFeedback = Math.round((options.good / totalFeedback) * 100);

  return (
    <div>
      <h2>Statistics</h2>
      {totalFeedback === 0 && <p>No feedback yet</p>}
      <p>Good: {options.good}</p>
      <p>Neutral: {options.neutral}</p>
      <p>Bad: {options.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}</p>
      
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>Reset Feedback</button>
    </div>
  );
}

export default App;
