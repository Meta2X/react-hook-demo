import React, { useRef, useState } from "react";
import Tooltip from "./Tooltip";

type Props = {
  tooltipContent: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

type TargetRect = {
  left: number;
  right: number;
  top: number;
  bottom: number;
} | null

export default function ButtonWithTooltip({tooltipContent, ...rest}: Props) {
  const [targetRect, setTargetRect] = useState<TargetRect>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleonPointEnter = () => {
    if(buttonRef.current) {
      const { left, right, top, bottom } = buttonRef.current.getBoundingClientRect()
      setTargetRect({left,right,top,bottom})
    }
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