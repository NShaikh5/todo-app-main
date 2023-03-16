import connect from "../../lib/mongodb";
import User from '../../model/schema'


export default async function handler(req,res){
    try {
        await connect()
        const user = await User.create(req.body);

        if(!user){
            res.json({"code":'User not created'})
        }

        res.json(user)
    } catch (error) {
        res.status(400).json({status:'Not able to create a new user.' + error.message})
        console.log(error.message)
    }
}