import { memo } from "react"

function ChildA(
  {num, callback, obj}:
  {num?: number; callback?: ()=>void;obj?: {}}){
  console.log('渲染子组件A')
  return (
    <div>aaa-{num}</div>
  )
}

export default memo(ChildA)