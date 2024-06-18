export default function TooltipContainer({contentRef, x, y, children}){
  return (
    <div ref={contentRef} 
      style={{position:'absolute',left:0,top:0,transform: `translate3d(${x}px, ${y}px, 0)`}}>
      {children}
    </div>
  )
}