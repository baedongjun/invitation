import './globals.css'

export const metadata = {
  title : {
    default : '모바일 청첩장',
    template : ''
  },
  description : '모바일 청첩장'
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body style={{ paddingRight: '0px' }}>
        <div id="__next" data-reactroot>
          <div id="main_container" className="max-w-screen-t m-auto flex flex-col min-h-screen ">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}


