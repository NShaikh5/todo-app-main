import connect from "../../lib/mongodb";
import User from '../../model/schema'   
 
connect()

export default async function handler(req,res){

    const {email,password}=req.body
    const user = await User.findOne({email,password})

  
      
    if(!user){
        res.redirect('/login')
    }
    else{
         res.redirect('/activity')
    }
}