import { useEffect, useRef } from 'react'
import Input, {CustomRef} from './Input'
function App() {
  // const ref = useRef<HTMLInputElement>(null)
  const ref = useRef<CustomRef>(null)
  useEffect(()=>{
    // ref.current?.focus()
    ref.current?.inputFocus()
  }, [])
  return (
    <div className="App">
      {/* <input ref={ref}/> */}
      <Input ref={ref} />
    </div>
  );
}

export default App;
