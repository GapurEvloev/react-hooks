import {useState} from "react";
import Count from "./Count";
import IsFive from "./IsFive";

const HookUseMemoEx = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div className="App">
      <h5>Counter 1</h5>
      <div className="counter">
        <button onClick={() => setCount1(count1 + 1)}>+</button>
        <Count id={1} value={count1}/>
      </div>

      <hr/>

      <h5>Counter 2</h5>
      <div className="counter">
        <button onClick={() => setCount2(count2 + 1)}>+</button>
        <Count id={2} value={count2}/>
        <IsFive value={count2} />
      </div>
    </div>
  )
}

export default HookUseMemoEx;