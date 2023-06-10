import { connectDB } from "@/util/database"
import Image from 'next/image';

export const dynamic = 'force-dynamic'

export default async function PhotoList() {
  const db = (await connectDB).db('invitation');
  let result = await db.collection('photo').find().toArray();

  return (
    <div>
      {
        result.map((a, i) => 
          <div key={i}>
            <Image 
              width={768} 
              height={300} 
              src={result[i].src} 
              alt={result[i].title}
            />
          </div>
        )
      }
    </div>
  )
}
