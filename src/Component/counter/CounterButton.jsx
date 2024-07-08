import React, { useState } from "react";
import propTypes from "prop-types";
const CounterButton = ({ by,incrementMethod,decrementMethod }) => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + by);
      incrementMethod(by);
    };
    const decrement = () => {
      setCount(count - by);
      decrementMethod(by);
    };
    return (
      <div className="counter">
        <div className="align">
          <div>
            <button className="btn" onClick={increment}>
              +{by}
            </button>
          </div>
          <div>
            <button className="btn2" onClick={decrement}>
              -{by}
            </button>
          </div>
        </div>
      </div>
    );
  };
  CounterButton.propTypes = {
    by: propTypes.number,
  };
export default CounterButton;  