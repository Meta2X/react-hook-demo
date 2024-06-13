import { useEffect, useState } from 'react';
import './App.css';

function getData(){
  return new Promise<number>((resolve,reject)=>{
    setTimeout(()=>{
      resolve(69)
    }, 1500)
  })
}
function App() {
  console.log("YYYYY") // 执行两次
  const [num, setNum] = useState(0)
  // 想用 async await 语法需要单独写一个函数
  // 因为 useEffect 参数的那个函数不支持 async
  useEffect(()=>{
    console.log('XXXXX') // 执行一次
    getData().then((res)=>{
      setNum(res)
    })
  }, [])
  // 这个数组叫做依赖数组，react 是根据它有没有变来决定是否执行 回调函数
  // 如果没传则每次都执行
  return (
    <div className="App">
      <button onClick={()=>setNum(num+1)}>{num}</button>
    </div>
  );
}

export default App;
