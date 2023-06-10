import { connectDB } from "@/util/database"
import bcrypt from 'bcrypt'

export default async function handler(req, res) {
  const db = (await connectDB).db('invitation');
  
  switch (req.method){
    case 'POST' : 
      req.body.password = await bcrypt.hash(req.body.password, 10)
      await db.collection('user_cred').insertOne(req.body)

      
      return res.status(200).json('회원가입이 완료되었습니다.')
    case 'PUT' : 
      return res.status(200).json('처리완료함')
    case 'DELETE' : 
      return res.status(200).json('처리완료함')
    default :
      return res.status(200).json('처리완료함')
  }
}
  