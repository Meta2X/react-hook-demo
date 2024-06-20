import { useContext } from 'react'
import {personContext} from './App'
export default function Bbb(){
  const context = useContext(personContext)
  if(!context) return null
  const {person, setPerson} = context
  return (
    <div>
      bbb-{person?.name}
      <button onClick={()=>setPerson({name: 'metax'})}>更新</button>
    </div>
  )
}