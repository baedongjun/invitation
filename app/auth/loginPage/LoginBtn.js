'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image';

export default function LoginBtn(props){
  return(
    <>
      <div className="Touchable_opacity_container__b85IR flex items-center w-full rounded-[6rem] overflow-hidden " onClick={()=>{  signIn() }}>
        <div className="w-[48rem] h-[48rem] flex items-center justify-center border-y-[1rem] border-l-[1rem] border-l1 rounded-l-[6rem]" style={{ backgroundColor: props.backColor }}>
          <Image loading="eager" width={36} height={36} className="w-[36rem] h-[36rem]" src={props.imageSrc} alt={props.apiName}/>
        </div>
        <div className="flex h-[48rem] flex-1 justify-center items-center sans14a text-b2 border-y-[1rem] border-l1 border-x-[1rem] rounded-r-[6rem]">
          {props.apiName} 로그인 
        </div>
      </div>
      <div className="w-full" style={{ height: '10rem' }}></div>
    </>
  )
}


