import React from "react";

function Feedback({ onFeedback }) {
  return (
    <div className="option">
      <button onClick={() => onFeedback("good")}>Good</button>
      <button onClick={() => onFeedback("neutral")}>Neutral</button>
      <button onClick={() => onFeedback("bad")}>Bad</button>
    </div>
  );
}

export default Feedback;
