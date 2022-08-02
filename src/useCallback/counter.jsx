import Buttons from "./buttons";
import {useCallback, useState} from "react";

const SimpleContent = () => {
  const [count, setCount] = useState(0);
  const onPlus = useCallback(() => setCount(count => count + 1), []);
  const onMinus = useCallback(() => setCount(count => count - 1), []);

  return (
    <div>
      <h1>{count}</h1>
      <Buttons onPlus={onPlus} onMinus={onMinus} />
    </div>
  )
}

export default SimpleContent;