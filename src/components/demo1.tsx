import { useState } from 'react'
export default function Demo1(){
  const [num, setNum] = useState(0)
  return (
    <div>
      {num}
      <button onClick={()=>setNum(num+1)}>增加</button>
      <button onClick={()=>setNum(num-1)}>减少</button>
    </div>
  )
}