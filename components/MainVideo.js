
export const dynamic = 'force-dynamic'

export default async function MainVideo() {
  return (
    <div>
              <video muted loop autoPlay playsInline style={{ width:'100vw', height : '100vh'}}>
                <source src="/video/video1.mp4" type="video/mp4"/>
              </video>
            <div className="w-full" style={{ height: '40rem' }}></div>
    </div>
  )
}
