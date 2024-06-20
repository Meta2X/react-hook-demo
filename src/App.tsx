import { useCallback, useState, useMemo } from "react";
import ChildA from "./ChildA";
// memo 的作用是只有 props 变的时候，才会重新渲染被包裹的组件
// memo 是防止 props 没变时的重新渲染
// useMemo 和 useCallback 是防止 props 的不必要变化

// 如果子组件用了 memo，那给它传递的对象、函数类的 props 就需要用 useMemo、useCallback 包裹，否则，每次 props 都会变，memo 就没用了。
// 如果 props 使用 useMemo、useCallback，但是子组件没有被 memo 包裹，那也没意义，因为不管 props 变没变都会重新渲染，只是做了无用功。

// 可以用 useMemo 来缓存 需要很大的计算量的值
function App() {
  const [num, setNum] = useState(0)
  // const fn: ()=>void = () => {}
  return (
    <div className="App">
      {/* <ChildA /> */}
      {/* <ChildA num={num} /> */}
      {/* <ChildA callback={ useCallback(fn, []) }/> */}
      <ChildA obj={useMemo(()=>{ return { num } }, [num])}/>
      <button onClick={()=>setNum(num+1)}>{num}</button>
    </div>
  );
}

export default App;
