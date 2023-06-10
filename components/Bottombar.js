import { getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";
import BottomIcon from '/components/BottomIcon'


export default async function BottomBar() {
  let session = await getServerSession(authOptions)

  return (
    <div className="fixed w-full bottom-[0rem] z-[40] transition-transform">
      <div className="border-t-[1rem] border-[#e6e6e6] px-[30rem] py-[7rem] bg-wh w-full t:w-[768rem] h-[50rem] flex justify-between items-center">
        <BottomIcon linkUrl='/' iconSrc="/icon/home-on.svg"/>
        <BottomIcon linkUrl='/photoList' iconSrc="/icon/photoList-on.svg"/>
        <BottomIcon linkUrl='/message' iconSrc="/icon/search-on.svg"/>
        {
          session 
          ? <BottomIcon linkUrl='/mypage' iconSrc="/icon/message-on.svg"/> 
          : <BottomIcon linkUrl='/auth/login' iconSrc="/icon/message-off.svg"/>
        }
        
      </div>
    </div>
  )
}

