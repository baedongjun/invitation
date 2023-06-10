'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function TitleBar(props) {
  let router = useRouter();
  return (
    <div className='sticky top-[0rem] z-[40] transition-transform'>
      <div className="flex justify-between items-center h-[54rem] bg-wh px-[16rem] undefined">
        <div className="flex justify-start">
          <button className="Touchable_opacity_container__b85IR" onClick={()=>{router.back()}}>
            <div className="w-[36rem] h-[36rem]">
              <Image loading="eager" width={500} height={500} className="w-full h-full" src="/icon/arrow-left-black.svg" alt="뒤로가기"/>
            </div>
          </button>
        </div>
        <div className="absolute h-ful items-center left-[50%] translate-x-[-50%] max-w-[232rem] sans16_m text-b2 flex-1 flex justify-center line-clamp-1 text-center">
          {props.menuName}
        </div>
      </div>
    </div>
  )
}
  