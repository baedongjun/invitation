
export default function nowdateAPI(req, res) {
  let now = new Date();
  switch (req.method){
    case 'GET' : 
      return res.status(200).json(now.toString());
    case 'POST' : 
      return res.status(200).json('처리완료함')
    case 'PUT' : 
      return res.status(200).json('처리완료함')
    case 'DELETE' : 
      return res.status(200).json('처리완료함')
    default :
      return res.status(200).json('처리완료함')
  }
}
  