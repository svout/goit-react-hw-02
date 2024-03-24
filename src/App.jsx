import React, { useState } from "react";
import "./App.css";
import Description from "./components/Description";
import Feedback from "./components/Feedback";
import Options from "./components/Option";
import Reset from "./components/Reset";

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
    <div className="App">
      <Description />
      <Feedback onFeedback={handleFeedback} />
      {feedbackGiven && <Reset onReset={resetFeedback} />}
      {feedbackGiven && <Options options={feedbackTypes} />}
    </div>
  );
}

export default App;
