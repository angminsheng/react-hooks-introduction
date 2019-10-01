import { useState, useEffect } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = counter;
  }, [counter]);

  return [counter, setCounter];
};

export default useCounter;
