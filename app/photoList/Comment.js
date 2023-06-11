'use client'

import { useEffect, useState } from "react"
import { postData } from "@/util/postData"

export default function Comment(props){
  let [comment, setComment] = useState('')
  let [commentList, setCommentList] = useState([])

  useEffect(() => {
    fetch('/api/comment?id=' + props._id).then(r=>r.json()).then((result)=>{
      setCommentList(result)
    })
  },[])


  return(
    <>
      <div>
        {
          commentList.map((a, i) => 
            <div key={i}>
              <div className="w-full flex justify-between ">
                <div className="flex mr-[10rem] w-full ">
                  <p className="flex sans14c text-b6">{commentList[i].content}</p>
                </div>
                <div className="w-[162rem] flex justify-end">
                  <p className="mont16b_m text-b6">{commentList[i].userName}</p>
                </div>
              </div>
              <div className="w-full" style={{ height: '10rem' }}></div>
            </div>
          )
        }

        <div className="flex">
          <div className="w-full mr-[8rem] ">
            <label>
              <div className="relative">
              <input className="placeholder:text-b9 placeholder:sans14b w-full pt-[10rem] pb-[12rem] px-[12rem] border border-l2 sans14b text-b4 disabled:bg-l3 " maxLength="524288" placeholder="댓글을 입력해주세요." autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" type="text" onChange={(e)=>{ setComment(e.target.value) }}></input>
              </div>
            </label>
          </div>
          <div className="Touchable_opacity_container__b85IR flex items-center justify-center basis-1/4 px-[14rem] pt-[5rem] pb-[6rem] sans14c whitespace-nowrap min-w-[80rem] justify-center flex items-center border border-b2 text-b2 text-b2 bg-wh " 
          onClick={()=>{
            postData('/api/comment', 
            { 
              comment : comment, 
              _id : props._id 
            }).then((data) => {
              fetch('/api/comment?id=' + props._id).then(r=>r.json()).then((result)=>{
                setCommentList(result)
              })
              alert(data)
            })
          }}>
            전송
          </div>
        </div>       
        <div className="w-full" style={{ height: '52rem' }}></div>
      </div>
    </>
  )
}