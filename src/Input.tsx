import { forwardRef, useImperativeHandle, useRef } from "react"
// React.ForwardRefRenderFunction<HTMLInputElement>
export type RefProps = {
  newRef: ()=>void
}
const Input: React.ForwardRefRenderFunction<RefProps> = (props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)
  // 用 useImperativeHanlde 自定义了 ref 对象
  useImperativeHandle(ref, () => {
    return {
      newRef() {
        inputRef.current?.focus();
      }
    }
  }, [inputRef]);

  return (
    <input ref={inputRef} />
  )
}
export default forwardRef(Input)