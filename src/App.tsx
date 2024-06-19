import { useReducer, useState } from 'react';
import { produce } from 'immer'
import './App.css';
type State =  {
  result: number
}
type Action = {
  type: 'add' | 'minus'
  num: number
}

function reducer(state: State, action: Action){
  switch(action.type){
    case 'add':
      return produce(state, (state)=>{
        state.result = state.result + action.num
      })
      // immer 是依赖 Proxy 实现的，它会监听你在函数里对属性的修改，然后帮你创建一个新对象。
      // {
      //   result: state.result + action.num
      // }
    case 'minus':
      return produce(state, (state)=>{
        state.result = state.result - action.num
      })
    default:
      return state
  }
}

function App() {

  const [res, dispatch] =  useReducer(reducer, {result: 0})
  const [total, setTotal]= useState({num:0})
  return (
    <div className="App">
      {res.result}
      <button onClick={()=>dispatch({type: 'add', num: 10})}>加</button>
      <button onClick={()=>dispatch({type: 'minus', num: 10})}>减</button>
      <div>-------</div>
      {total.num}
      <button onClick={()=>{
        // total.num++;
        // setTotal(total) 无效

        // setTotal({num: total.num++}) 有效

        setTotal(produce(total, (total)=>{ total.num++ })) // immer

        // 在 react 里，只要涉及到 state 的修改，就必须返回新的对象，不管是 useState 还是 useReducer

      }}>只加一</button>
    </div>
  );
}

export default App;
