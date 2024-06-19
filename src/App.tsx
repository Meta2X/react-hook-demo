import { useEffect, useRef } from "react";
import Input from "./Input";
function App() {
  const ref = useRef<HTMLInputElement>(null)
  useEffect(()=>{
    ref.current?.focus()
  }, [])
  return (
    <div className="App">
      <Input inputRef={ref}/>
    </div>
  );
}

export default App;
