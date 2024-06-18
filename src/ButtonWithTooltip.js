import { useRef, useState } from "react";
import Tooltip from "./Tooltip";
export default function ButtonWithTooltip({tooltipContent, ...rest}) {
  const [targetRect, setTargetRect] = useState(null)
  const buttonRef = useRef(null)

  const handleonPointEnter = () => {
    const { left, right, top, bottom } = buttonRef.current.getBoundingClientRect()
    setTargetRect({left,right,top,bottom})
  }
  const handleonPointOut = () => {
    setTargetRect(null)
  }
  return (
    <>
      <button 
        {...rest}
        ref={buttonRef}
        onPointerEnter={handleonPointEnter}
        onPointerOut={handleonPointOut}
      />
      { targetRect !== null && (
          <Tooltip targetRect={targetRect}>
            {tooltipContent}
          </Tooltip>
        )
      }
    </>
  )
}