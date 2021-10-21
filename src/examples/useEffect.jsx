import React, { useState, useEffect } from 'react';

// class List extends React.Component {
//     state = {
//         numbers: [1, 2, 3, 4],
//     }
    
//     addRandomNumber = () => {
//         const randomNumber = this.state.numbers[(this.state.numbers.length - 1)];
//         this.setState({
//             numbers: [...this.state.numbers, randomNumber+1]
//         })
//     }

//     componentDidMount() {
//         console.log("компонет был отображен");
//     }

//     componentDidUpdate(prevProps, prevState) {
//         // console.log(prevProps, prevState, this.props, this.state);
//         if(this.state.numbers.length !== prevState.numbers.length) {
//             console.log("Something update");
//         }
//     }

//     componentWillUnmount() {
//         console.log('компонет будет удален');
//     }

//     render() {
//         return (
//             <>
//                 <ul>
//                     {
//                         this.state.numbers.map((num, i) => 
//                             <li key={i}>{num}</li>
//                         )
//                     }
//                 </ul>
//                 <button onClick={this.addRandomNumber}>Add num</button>
//             </>
//         )
//     }
// }

const List = () => {
    const [numbers, setNumbers] = useState([1, 2, 3]);
    const [count, setCount] = useState(0);

    const addNumber = () => {
        const randomNumber = numbers[(numbers.length - 1)];
        setNumbers([...numbers, randomNumber+1]);
    }
    
    // useEffect(
    //     () => {
    //         console.log('Компонент был отображен: componentDidMount');
    //     }, 
    //     [] // - если передаем пустой массив, то это componentDidMount | следит только за созданием компонента
    // );

    // useEffect(
    //     () => {
    //         console.log('Компонент был отображен: componentDidMount + componentDidUpdate | следит за всеми изменениями');
    //     } // - если вторым параметром ничего не передаем, то это componentDidMount + componentDidUpdate | следит за всеми изменениями
    // );

    // useEffect(
    //     () => {
    //         console.log('Компонент был обновлен');
    //     }, 
    //     [numbers] // - если передаем numbers, то это componentDidMount + componentDidUpdate только для numbers | следит за созданием и обнолвением значений которые указаны в массиве второго параметра
    // );

    // useEffect(
    //     () => {
    //         console.log('Счетчик увеличился');
    //     }, 
    //     [count] // - если передаем count, то это componentDidMount + componentDidUpdate только для count | следит за созданием и обнолвением значений которые указаны в массиве второго параметра
    // );

    useEffect(
        () => {
            console.log('Компонент был обновлен');
            return () => {
                console.log("Will unmount")
            }
        }, 
        [] // - если передаем пустой массив и возвращаем анонимную функцию то это componentDidMount + componentWillUnmount | сдедит за созданием и удалением 
    );

    return (
        <>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>+</button>
            <ul>
                {
                    numbers.map((num, i) => 
                        <li key={i}>{num}</li>
                    )
                }
            </ul>
            <button onClick={addNumber}>Add num</button>
        </>
    )
}

export default List;