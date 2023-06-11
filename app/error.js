'use client'

export default function Error( props ){
  return(
    <div>

      <button onClick={()=>{ props.reset() }}>버튼</button>

    </div>
  )
}