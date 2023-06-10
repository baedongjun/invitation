import { getServerSession } from "next-auth";
import LoginBtn from "./LoginBtn";
import LogOutBtn from "./LogOutBtn";
import { authOptions } from "pages/api/auth/[...nextauth]";

export default async function Mypage() {
  let session = await getServerSession(authOptions)
  if (session) {
    console.log(session)
  }
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
