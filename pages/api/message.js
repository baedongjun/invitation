import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function messageAPI(req, res) {
  const db = (await connectDB).db('invitation');
  let session = await getServerSession(req, res, authOptions)
  if(session){
    req.body.author = session.user.email
  }

  switch (req.method){
    case 'GET' : 
      return res.status(200).json(await db.collection('message').find().toArray())
    case 'POST' : 
      if(req.body.userName == ''){
        return res.status(500).json('이름을 입력해주세요.')
      }else if(req.body.contents == ''){
        return res.status(500).json('메세지를 입력해주세요.')
      }
      
      try{
        await db.collection('message').insertOne(req.body)
        return res.status(200).json('등록되었습니다.')
      }catch (error) {
        return res.status(400).json('잠시후 다시 시도해주세요.')
      }
    case 'DELETE' : 
      console.log(req.body)
      let checkResult = await db.collection('message').findOne({
        _id : new ObjectId(req.body)
      })

      if(checkResult.author != session.user.email){
        return res.status(500).json('현재 유저와 작성자 불일치')
      }else{
        let result = await db.collection('message').deleteOne({ 
          _id : new ObjectId(req.body)
        })

        if(result.deletedCount != 0){
          return res.status(200).json('삭제하였습니다.')
        }
      }
    default :
      return res.status(200).json('처리완료함')
  }
}
  