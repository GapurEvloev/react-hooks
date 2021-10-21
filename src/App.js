import { useState } from 'react';
import List from './examples/useEffect.jsx'

import './App.css';

function App() {
  const [visibleList, setVisibleList] = useState(true);

  const toggleList = ()  => {
    setVisibleList(visible => !visible)
  }

  return (
    <div className="App">
      { visibleList && <List/>}
      <button onClick={toggleList}>toggle</button>
    </div>
  );
}

export default App;
