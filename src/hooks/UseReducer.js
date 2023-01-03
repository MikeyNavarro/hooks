import React, { useState } from "react";

const UseReducer = ({ count, countChangeHandler, setCount }) => {
  const [on, setOn] = useState(false);

  const onChangeHandler = () => {
    setOn(!on);
    setCount(count + 1);
  };

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={onChangeHandler}>Increase On</button>
      {on && <h1>Ayo im true</h1>}
    </div>
  );
};

export default UseReducer;
