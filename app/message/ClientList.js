'use client'

import { deleteData } from "@/util/deleteData"

export default function ClientList({result}) {
  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      _id : e.target._id.value
    }
    deleteData('/api/message', data).then((data) => {
      alert(data)
      window.location.href = '/message'
    });
  }
  return (
    <>
      {
        result.map((a, i) => 
          <form className="w-full" onSubmit={handleSubmit}>
            <input type="hidden" name="_id" defaultValue={result[i]._id}/>
            <section className="px-[24rem] pt-[28rem] pb-[32rem] bg-wh w-full mb-[20rem]" key={i}>
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
                >삭제</button>
              </div>
            </section>
          </form>
        )
      }
    </>
  )
}
