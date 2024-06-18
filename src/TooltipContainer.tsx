import React, { RefObject } from "react";

type props = {
  contentRef: RefObject<HTMLDivElement>
  x: number;
  y: number;
  children: React.ReactNode
}

export default function TooltipContainer({contentRef, x, y, children}: props){
  return (
    <div ref={contentRef} 
      style={{position:'absolute',left:0,top:0,transform: `translate3d(${x}px, ${y}px, 0)`}}>
      {children}
    </div>
  )
}