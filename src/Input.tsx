import React, { forwardRef, useImperativeHandle, useRef } from "react"

export type CustomRef = {
  inputFocus: ()=>void
}

// const Input: React.ForwardRefRenderFunction<HTMLInputElement> = (props, ref)=>{
const Input: React.ForwardRefRenderFunction<CustomRef> = (props, ref)=>{
  const inputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, ()=>{
    return { // 返回自定义api
      inputFocus(){
        inputRef.current?.focus()
      }
    }
  }, [inputRef])

  return (
    <input ref={inputRef}/>
  )
}
export default forwardRef(Input)