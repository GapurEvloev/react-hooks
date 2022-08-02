import React, {useRef, useState} from 'react';

function HookListUseRef() {

  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const timerRef = useRef();

  const addNumber = () => {
    setNumbers(prev => [...prev, prev.length + 1]);
  };

  const start = () => {
    timerRef.current = setInterval(addNumber, 1000)
  };

  const stop = () => {
    console.log(timerRef)
    clearInterval(timerRef.current);
  }

  return (
    <div>
      <ul>
        {
          numbers.map((num, i) =>
            <li key={i}>{num}</li>
          )
        }
      </ul>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}

export default HookListUseRef;