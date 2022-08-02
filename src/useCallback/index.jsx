import React, {useCallback, useRef, useState} from 'react';

function HookListUseRef() {

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const ulRef = useRef();
  const numbersRef = useRef();

  numbersRef.current = numbers;

  const addNumber = () => {
    setNumbers(prev => [...prev, prev.length + 1]);
  };

  const handleScroll = useCallback(() => {
    console.log("Scrolling", numbersRef.current)
  }, [])

  const start = () => {
    ulRef.current.addEventListener("scroll", handleScroll);
  };

  const stop = () => {
    console.log(ulRef)
    ulRef.current.removeEventListener("scroll", handleScroll);
  }

  return (
    <div>
      <ul ref={ulRef}>
        {
          numbers.map((num, i) =>
            <li key={i}>{num}</li>
          )
        }
      </ul>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={addNumber}>Add</button>
    </div>
  );
}

export default HookListUseRef;