import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(request){

  // console.log(request.nextUrl)
  // console.log(request.cookies)
  // console.log(request.headers)

  // NextResponse.next()
  // NextResponse.redirect()
  // NextResponse.rewrite()

  const session = await getToken({req : request})
  if ( request.nextUrl.pathname.startsWith('/photoList')){
    if(session == null){
      return NextResponse.redirect('http://localhost:3000/auth/loginPage')
    }
    return NextResponse.next()
  }

  if ( request.nextUrl.pathname.startsWith('/message')){
    console.log(new Date())
    console.log(request.headers.get('sec-ch-ua-platform'))
    return NextResponse.next()
  }


  // request.cookies.get('쿠키이름')  //출력
  // request.cookies.has('쿠키이름')  //존재확인
  // request.cookies.delete('쿠키이름')  //삭제
  
  // const response = NextResponse.next()
  // response.cookies.set({
  //   name: 'mode',
  //   value: 'dark',
  //   maxAge: 3600,
  //   httpOnly : true
  // })  
  // return response  //쿠키생성

}