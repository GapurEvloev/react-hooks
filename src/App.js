import { useState } from 'react';
// import ClassList from './examples/useEffectClass.jsx'
// import HookList from './examples/State'

import './App.css';
import HookListUseRef from "./examples/useRef";
import SimpleContent from "./useCallback/counter";
// import HookUseMemoEx from "./useMemo";

function App() {
  const [visibleList, setVisibleList] = useState(true);

  const toggleList = ()  => {
    setVisibleList(visible => !visible)
  }

  return (
    <div className="App">
      { visibleList && <HookListUseRef visibleList={visibleList}/>}
      <button onClick={toggleList}>toggle</button>

      <hr/>

      {/*<HookUseMemoEx/>*/}

      <SimpleContent/>
    </div>
  );
}

export default App;
