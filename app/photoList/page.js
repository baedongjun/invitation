import { connectDB } from "@/util/database"
import Image from 'next/image';
import Comment from "./Comment";

export const dynamic = 'force-dynamic'

export default async function PhotoList() {
  const db = (await connectDB).db('invitation');
  let result = await db.collection('photo').find().toArray();

  return (
    <div>
      <div className="section bg-l3  pb-[8rem]">
        <div className="section-content bg-white">
          <div className="flex flex-col items-center px-[22rem]">
            <div className="w-[320rem] h-[170rem] bg-b2 rounded-[12rem]">
              {
                result.map((a, i) => 
                  <div key={i}>
                    <Image 
                      width={768} 
                      height={300} 
                      src={result[i].src} 
                      alt={result[i].title}
                    />
                    <div className="w-full" style={{ height: '30rem' }}></div>
                    <Comment _id={result[i]._id.toString()}/>
                  </div>
                )
              }
            </div>
            <div className="w-full" style={{ height: '40rem' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
