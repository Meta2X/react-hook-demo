import { useReducer } from 'react';
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
      return {
        result: state.result + action.num
      }
    case 'minus':
      return {
        result: state.result - action.num
      }
    default:
      return state
  }
}

function App() {

  const [res, dispatch] =  useReducer(reducer, {result: 0})
  return (
    <div className="App">
      {res.result}
      <button onClick={()=>dispatch({type: 'add', num: 10})}>加</button>
      <button onClick={()=>dispatch({type: 'minus', num: 10})}>减</button>
    </div>
  );
}

export default App;
