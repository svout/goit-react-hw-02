import React from "react";

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

  export default Options
