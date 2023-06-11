'use client'

import { postData } from "@/util/postData"
import { useState } from "react"

export default function Write() {
  
  let [contents, setContents] = useState('')
  let [src, setSrc] = useState('')

  return (
    <div className="h-full flex-1 overflow-auto ">
        <div className="px-[22rem]">
          <input type="hidden" name="wdate" defaultValue={'2023-06-06'}/>
          <div className="flex justify-between pb-[10rem] border-b2 border-b-[2rem]">
            <p className="sans16_m text-b2 text-left">축하 메세지</p>
            <div className="Touchable_opacity_container__b85IR">
              <p className="sans13a text-b6"></p>
            </div>
          </div>
          <div className="w-full" style={{ height: '12rem' }}></div>

          <label>
            <textarea className="w-full h-[180rem] py-[16rem] px-[12rem] border border-l2 sans14b text-b4 resize-none" placeholder="축하 메세지를 입력해주세요" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" maxLength="2000"
            onChange={(e)=>{
              setContents(e.target.value)
            }}>
            </textarea>
          </label>
          <div className="w-full" style={{ height: '10rem' }}></div>

          <input type="file" accept="image/*" onChange={ 
            async (e)=>{
              let file = e.target.files[0]
              let filename = encodeURIComponent(file.name)
              let res = await fetch('/api/post/image?file=' + filename)
              res = await res.json()

              //S3 업로드
              const formData = new FormData()
              Object.entries({ ...res.fields, file }).forEach(([key, value]) => {
                formData.append(key, value)
              })
              let uploadResult = await fetch(res.url, {
                method: 'POST',
                body: formData,
              })
              console.log(uploadResult)

              if (uploadResult.ok) {
                setSrc(uploadResult.url + '/' + filename)
              } else {
                console.log('실패')
              }
            }
          } />
          <img src={src} />

          <div className="w-full" style={{ height: '10rem' }}></div>
              
          <div className="flex">
            <button type="submit" className="Touchable_opacity_container__b85IR flex items-center h-[40rem] justify-center w-full pt-[7rem] pb-[9rem] rounded-[4rem] sans13a text-b4 font-normal bg-b2 text-wh "
            onClick={(e)=>{
              postData('/api/message', 
              {
                contents : contents,
              }
              ).then((data) => {
                alert(data)
              })
            }}
            >등록하기</button>
          </div>
          <div className="w-full" style={{ height: '30rem' }}></div>

        </div>
      </div>
  )
}
