import React, { useState, useEffect } from "react";
// import useCounter from "./useCounter";

const HooksCounter = () => {
  // it is advised to seperate the state into multiple use state instead of creating a big state object.
  const [counter, setCounter] = useState(0);

  // there is also possibility to create multiple useEffect one for each state instead of having only one componentWillUpdate in class component.
  useEffect(() => {
    document.title = counter;

    //equivalent to componentWillUnmount
    return () => {
      document.title = "react app";
    };

    // The array is the dependancy array that will trigger the useEffect when one of the state or variable changes.
  }, [counter]);

  //example of a custom hook in this case.
  // const [counter, setCounter] = useCounter();

  return (
    <div>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>add</button>
    </div>
  );
};

export default HooksCounter;
