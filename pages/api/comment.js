import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function CommentAPI(req, res) {
  const db = (await connectDB).db('invitation');
  let session = await getServerSession(req, res, authOptions)

  if(session){
    if(req.body){
      req.body.author = session.user.email
      req.body.userName = session.user.name
    }
  }else{
    return res.status(400).json('로그인 후 입력해주세요.')
  }


  switch (req.method){
    case 'GET' : 
      let result = await db.collection('comment')
      .find({ parent : new ObjectId(req.query.id) }).toArray()

      return res.status(200).json(result)
    case 'POST' : 
      let params = {
        content : req.body.comment,
        parent : new ObjectId(req.body._id),
        author : req.body.author,
        userName : req.body.userName
      }

      if(params.comment == ''){
        return res.status(500).json('댓글을 입력해주세요.')
      }
      
      try{
        await db.collection('comment').insertOne(params)
        return res.status(200).json('등록되었습니다.')
      }catch (error) {
        return res.status(400).json('잠시후 다시 시도해주세요.')
      }
    case 'DELETE' : 
      let checkResult = await db.collection('comment').findOne({
        _id : new ObjectId(req.body)
      })

      if(checkResult.author != session.user.email){
        return res.status(500).json('현재 유저와 작성자 불일치')
      }else{
        let result = await db.collection('comment').deleteOne({ 
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
  