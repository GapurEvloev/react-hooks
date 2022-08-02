import React, {useEffect, useState} from 'react';

function HookList() {
    const [numbers, setNumbers] = useState([1, 2, 3]);

    const addNumber = () => {
        setNumbers([...numbers, numbers.length+1]);
    }

    useEffect(() => {
      console.log("hooks: Component did mount");
      return () => {
        console.log("hooks: Component will unmount");
      };
    }, [])

    useEffect(() => {
      console.log("hooks: Component did update");
    }, [numbers])

    return (
        <div>
            <ul>
                {
                    numbers.map((num, i) => 
                        <li key={i}>{num}</li>
                    )
                }
            </ul>
            <button onClick={addNumber}>Add num</button>
        </div>
    );
}

export default HookList;