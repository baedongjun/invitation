import { getServerSession } from "next-auth";
import LoginBtn from "./LoginBtn";
import LogOutBtn from "./LoginBtn";
import { authOptions } from "pages/api/auth/[...nextauth]";

export default async function Mypage() {

  let session = await getServerSession(authOptions)

  return (
    <>
    { 
      session 
        ? <span>{session.user.name} <LogOutBtn/> </span> 
        : <LoginBtn></LoginBtn>
    }
    </>
  )
}
