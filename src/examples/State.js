import React, { useState } from 'react';

function UseStateExample() {
    // Объявление переменной состояния, которую мы назовём "count"
    const [numbers, setNumbers] = useState([1, 2, 3]);

    const addNumber = () => {
        setNumbers([...numbers, numbers.length]);
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
            <button onClick={addNumber}>Add num</button>
        </div>
    );
}

export default UseStateExample;