import React from 'react';

class ClassList extends React.Component {
  state = {
    numbers: [1, 2, 3, 4],
  }

  componentDidMount() {
    console.log("class: componentDidMount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log(prevState, prevProps, this.state, this.props);
    if (this.state.numbers.length !== prevState.numbers.length) {
      console.log("class: componentDidUpdate")
    }
  }

  componentWillUnmount() {
    console.log("class: componentWillUnmount");
  }

  addNewLi = () => {
    this.setState({
      numbers: [...this.state.numbers, this.state.numbers.length+1]
    });
  }

  render() {
    return (
      <>
        <ul>
          {
            this.state.numbers.map((item, i) => (
              <li key={i}>{item}</li>
            ))
          }
        </ul>
        <button onClick={this.addNewLi}>add</button>
      </>
    )
  }
}

export default ClassList
;