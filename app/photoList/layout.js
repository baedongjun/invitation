import TitleBar from '/components/Titlebar'

export default function RootLayout({ children }) {
  return (
    <div>
      <TitleBar menuName="PHOTO"/>
      {children}
    </div>
  )
}