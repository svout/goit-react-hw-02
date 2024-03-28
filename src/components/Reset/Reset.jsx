import React from "react";

function Reset({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>Reset Feedback</button>
    </div>
  );
}

export default Reset;
