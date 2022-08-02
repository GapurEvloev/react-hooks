import React, {useMemo} from "react";

let renderCount = 0;

const IsFive = ({value}) => {
  console.log(`isFive render: ${++renderCount}`);

  const getResult = useMemo(() => {
    let i = 0;
    while (i < 600000000) i++;
    return value === 5 ? "It's five :D" : "It isn't five";
  }, [value])

  return (
    <h3>{getResult}</h3>
  )
}

export default React.memo(IsFive, (prevProps, nextProps) => {
  if (nextProps.value === 5) {
    return false;
  }
  return true;
});