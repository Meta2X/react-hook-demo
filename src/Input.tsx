import React from "react"

type InputProps = {
  inputRef: React.RefObject<HTMLInputElement>
}
export default function Input({inputRef}:InputProps) {
  
  return (
    <input ref={inputRef} />
  )
}