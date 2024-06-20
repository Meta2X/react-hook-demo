import Bbb from './Bbb'
import {personContext} from './App'
import { useContext } from 'react'
export default function Aaa(){
  const context = useContext(personContext)
  if(!context) return null
  const {person} = context
  return (
    <div>
      aaa-({person?.name})
      <Bbb />
    </div>
  )
}