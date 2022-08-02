import { useState } from 'react';
// import ClassList from './examples/useEffectClass.jsx'
// import HookList from './examples/State'

import './App.css';
import HookListUseRef from "./examples/useRef";

function App() {
  const [visibleList, setVisibleList] = useState(true);

  const toggleList = ()  => {
    setVisibleList(visible => !visible)
  }

  return (
    <div className="App">
      { visibleList && <HookListUseRef visibleList={visibleList}/>}
      <button onClick={toggleList}>toggle</button>
    </div>
  );
}

export default App;
