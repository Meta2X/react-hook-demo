import { useLayoutEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import TooltipContainer from "./TooltipContainer"
export default function Tooltip({targetRect, children}) {
  const ref = useRef(null)
  const [tooltipHeight, setTooltipHeight] = useState(0)
  useLayoutEffect(()=>{
    const { height } = ref.current.getBoundingClientRect()
    setTooltipHeight(height)
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