import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // Increase count by 1 on each click
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    // Decrease count by 1 on each click
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="counter">
      <h2>Counter App</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
