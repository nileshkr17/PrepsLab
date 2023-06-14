// import logo from './logo.svg';
// import './App.css';
//
// import UseMemoExample from './components/UseMemoExample';
// import
// function App() {
//   return (
//    <>
//    </>
//   );
// }

// export default App;


 // usememo example
import React, { useState } from 'react';
import './App.css';
import { useMemo } from 'react';
 function App() {
      const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])
  return (
    <>
      <input type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>

  );
}
export default App;
