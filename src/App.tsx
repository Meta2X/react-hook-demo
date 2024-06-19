import { useEffect, useRef } from 'react';
import Input, {RefProps}  from './Input'
function App() {
  const ref = useRef<RefProps>(null)
  // const ref0 = useRef(0) 

  useEffect(()=>{
    console.log(ref.current)
    ref.current?.newRef()
  }, [])

  return (
    <div className="App">
      {/* <input ref={ref} /> */}
      <Input ref={ref}/>
    </div>
  );
}

export default App;
