import BottomBar from '/components/Bottombar';
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body style={{ paddingRight: '0px' }}>
        <div id="__next" data-reactroot>
          <div id="main_container" className="max-w-screen-t m-auto flex flex-col min-h-screen ">
            {children}
            <BottomBar/>
          </div>
        </div>
      </body>
    </html>
  )
}


