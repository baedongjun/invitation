'use client'
import { useRouter, usePathname } from 'next/navigation';

export default function BottomIcon(props){
  let router = useRouter();
  let nowUrl = usePathname();
  return(
    
    <img 
      src={props.iconSrc} 
      onClick={()=>{ router.push(props.linkUrl) }} 
      style={{ width:'36rem', height:'36rem', cursor : 'pointer' }} 
    />
  )
}  
 


