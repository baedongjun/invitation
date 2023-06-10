import LoginBtn from "./LoginBtn";
import Image from 'next/image';

export default async function Login() {
  return (
    <main className="fit flex-1">
      <div className="flex flex-col items-center justify-center text-center h-full">
        <div className="w-full" style={{ height: '40rem' }}></div>
        <div className="flex flex-col items-center">
          <div className="w-[200rem] h-[140rem] flex justify-center">
            <Image loading="eager" width={200} height={140} className="w-full h-full object-contain" src="/icon/logo-login.svg" alt="멍냥보감"/>
          </div>
          <div className="w-full" style={{ height: '32rem' }}></div>
          <div className="w-[248rem] min-h-[168rem] flex flex-col justify-center">
            <LoginBtn imageSrc="/icon/kakao.svg" apiName="카카오" backColor="rgb(250, 225, 0)"/>
            <LoginBtn imageSrc="/icon/naver.svg" apiName="네이버" backColor="rgb(3, 199, 90)"/>
            <LoginBtn imageSrc="/icon/facebook.svg" apiName="페이스북" backColor="rgb(24, 119, 242)"/>
            <LoginBtn imageSrc="/icon/apple.svg" apiName="Apple" backColor="rgb(0, 0, 0)"/>
            <LoginBtn imageSrc="/icon/google.svg" apiName="Google" backColor="rgb(255, 255, 255)"/>
          </div>
        </div>
        <div className="w-full" style={{ height: '60rem' }}></div>
      </div>
    </main>
  )
}
