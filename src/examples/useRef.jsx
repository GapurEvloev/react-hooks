import React, {useEffect, useRef, useState} from 'react';

function HookListUseRef() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const ulRef = useRef();

  const addNumber = () => {
    setNumbers([...numbers, numbers.length + 1]);
  };

  const handleScroll = () => console.log("scroll");

  useEffect(() => {
    ulRef.current.addEventListener("scroll", handleScroll)
  }, []);

  useEffect(() => {
    //
  }, [numbers]);

  const removeScroll = () => {
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
      <button onClick={addNumber}>Add num</button>
      <button onClick={removeScroll}>Don't listen</button>
    </div>
  );
}

export default HookListUseRef;