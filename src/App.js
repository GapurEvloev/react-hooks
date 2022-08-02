import { useState } from 'react';
// import ClassList from './examples/useEffectClass.jsx'
import HookList from './examples/State'

import './App.css';

function App() {
  const [visibleList, setVisibleList] = useState(true);

  const toggleList = ()  => {
    setVisibleList(visible => !visible)
  }

  return (
    <div className="App">
      { visibleList && <HookList visibleList={visibleList}/>}
      <button onClick={toggleList}>toggle</button>
    </div>
  );
}

export default App;
