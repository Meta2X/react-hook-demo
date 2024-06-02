import { useState } from 'react';
import './App.css';


function App() {
  const [num, setNum] = useState(0)
  const [num0, setNum0] = useState(()=>{
    const num1 = 1+2+3+4+5
    const num2 = 6+7+8+9+10
    return num1+num2
  })
  return (
    <div className="App">
      <button onClick={ () => setNum(num+1) }>{num}</button>

      <button onClick={ () => setNum0((prev)=>prev+10) }>{num0}</button>
    </div>
  );
}

export default App;
