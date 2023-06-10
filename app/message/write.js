'use client'

import { postData } from "@/util/postData"

export default function Write() {
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      wdate : e.target.wdate.value,
      userName : e.target.userName.value,
      contents : e.target.contents.value,
      password : e.target.password.value
    }
    postData('/api/message', data).then((data) => {
      alert(data)
      window.location.href = '/message'
    });
  }

  return (
    <div className="h-full flex-1 overflow-auto ">
        <form className="px-[22rem]" onSubmit={handleSubmit}>
          <input type="hidden" name="wdate" defaultValue={'2023-06-06'}/>
          <div className="flex justify-between pb-[10rem] border-b2 border-b-[2rem]">
            <p className="sans16_m text-b2 text-left">축하 메세지</p>
            <div className="Touchable_opacity_container__b85IR">
              <p className="sans13a text-b6"></p>
            </div>
          </div>
          <div className="w-full" style={{ height: '12rem' }}></div>

          <label>
            <div className="relative">
              <input type="text" name="userName" className="placeholder:text-b9 placeholder:sans14b w-full pt-[10rem] pb-[12rem] px-[12rem] border border-l2 sans14b text-b4 disabled:bg-l3" maxLength="255" placeholder="이름을 입력해주세요" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"/>
            </div>
          </label>
          <div className="w-full" style={{ height: '10rem' }}></div>

          <label>
            <textarea name="contents" className="w-full h-[180rem] py-[16rem] px-[12rem] border border-l2 sans14b text-b4 resize-none" placeholder="축하 메세지를 입력해주세요" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" maxLength="2000">
            </textarea>
          </label>
          <div className="w-full" style={{ height: '10rem' }}></div>
              
          <div className="flex">
            <button type="submit" className="Touchable_opacity_container__b85IR flex items-center h-[40rem] justify-center w-full pt-[7rem] pb-[9rem] rounded-[4rem] sans13a text-b4 font-normal bg-b2 text-wh ">등록하기</button>
          </div>
          <div className="w-full" style={{ height: '30rem' }}></div>

        </form>
      </div>
  )
}
