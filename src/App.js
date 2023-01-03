import React, { useState } from "react";
import UseReducer from "./hooks/UseReducer";
import UseState from "./hooks/UseState";

const App = () => {
  const [count, setCount] = useState(0);
  const countChangeHandler = () => setCount(count + 1);
  return (
    <div>
      <UseState count={count} countChangeHandler={countChangeHandler} />
      <UseReducer
        count={count}
        setCount={setCount}
        countChangeHandler={countChangeHandler}
      />
    </div>
  );
};

export default App;
