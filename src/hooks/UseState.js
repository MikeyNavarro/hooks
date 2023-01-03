import React from "react";

const UseState = ({ count, countChangeHandler }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={countChangeHandler}>Increase Count</button>
    </div>
  );
};

export default UseState;
