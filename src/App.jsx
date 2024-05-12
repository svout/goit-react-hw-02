import React, { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Option";
import Reset from "./components/Reset/Reset";
import Notification from "./components/Notification/Notification";

function App() {
  const initialFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const storedFeedback = JSON.parse(localStorage.getItem("feedback"));
  const [feedbackTypes, setFeedbackTypes] = useState(
    storedFeedback || initialFeedback
  );

  const totalReviews = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;
  const positivePercentage = Math.round((feedbackTypes.good / totalReviews) * 100) || 0;

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

  const handleFeedback = (type) => {
    setFeedbackTypes((prevState) => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedbackTypes(initialFeedback);
  };

  return (
    <div className="App">
      <Description />
      <Feedback onFeedback={handleFeedback} />
      {totalReviews > 0 ? (
        <>
          <Reset onReset={resetFeedback} />
          <Options options={feedbackTypes} />
        </>
      ) : (
        <Notification message="No feedback statistics available." />
      )}
    </div>
  );
}

export default App;
