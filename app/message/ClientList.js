'use client'

import { deleteData } from "@/util/deleteData"

export default function ClientList({result}) {
  
  return (
    <>
      {
        result.map((a, i) => 
          <div className="w-full" key={i}>
            <section className="px-[24rem] pt-[28rem] pb-[32rem] bg-wh w-full mb-[20rem]">

              
              <div className="flex items-center justify-between w-full my-[10rem]">
                <span className="sans13b text-b9">{result[i].userName}</span>
                <span className="mont14a text-b9 justify-self-end">{result[i].wdate}</span>
              </div>
              <span className="sans14c text-b6 break-all">
              {result[i].contents}
              </span>


              <div className="w-full" style={{ height: '20rem' }}></div>
              <div className="flex">
                <div className="w-full min-h-[10rem]" style={{ width: '6rem' }}></div>
                <button type="submit" className="Touchable_opacity_container__b85IR flex items-center h-[40rem] justify-center w-full pt-[7rem] pb-[9rem] rounded-[4rem] sans13a text-b4 font-normal basis-[37%] bg-l1 text-b4 "
                onClick={()=>{
                  deleteData('/api/message', 
                  {
                    _id : result[i]._id,
                  }
                  ).then((data) => {
                    alert(data)
                  })
                }}
                >삭제</button>
              </div>
            </section>
          </div>
        )
      }
    </>
  )
}
