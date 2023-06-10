import { connectDB } from "@/util/database"
import Image from 'next/image';
import ClientList from "./ClientList.js";

export default async function List() {
  const db = (await connectDB).db('invitation');
  let result = await db.collection('message').find().toArray();
  result = result.map((a)=>{
    a._id = a._id.toString()
    return a
  })
  return (
    <article className="flex flex-col items-center w-full px-[22rem] pt-[28rem] pb-[60rem] bg-bg1">

      <ClientList result={result}/>

      <div className="Touchable_opacity_container__b85IR w-[332rem] t:w-[500rem] h-[52rem] flex justify-center bg-contain  bg-no-repeat mx-auto undefined " style={{ backgroundPosition: 'center center', backgroundImage: 'url(/icon/bt-box3.svg)' }}>
        <div className="flex items-center justify-center serif15" style={{ color: 'rgb(33, 33, 33)' }}>리뷰 더보기
          <div className="w-[36rem]">
            <Image loading="eager" className="w-full" src="/icon/eye.svg" alt="더보기 버튼" width={36} height={36}/>
          </div>
        </div>
      </div>
    </article>
  )
}
