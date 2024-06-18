import React, { useLayoutEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import TooltipContainer from "./TooltipContainer"

type targetRect = {
  left: number,
  right: number,
  top: number,
  bottom: number,
}
type props = {
  targetRect: targetRect
  children: React.ReactNode
}
export default function Tooltip({targetRect, children}: props) {
  const ref = useRef<HTMLDivElement>(null)
  const [tooltipHeight, setTooltipHeight] = useState(0)
  
  useLayoutEffect(()=>{
    if(ref.current){
      const { height } = ref.current.getBoundingClientRect()
      setTooltipHeight(height)
    }
  }, [])

  let tooltipX = 0
  let tooltipY = 0
  if(targetRect !== null){
    tooltipX = targetRect.left
    tooltipY = targetRect.top - tooltipHeight

    if(tooltipY < 0){
      tooltipY = targetRect.bottom
    }
  }

  return createPortal(
    <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
      {children}
    </TooltipContainer>,

    document.body
  );
}