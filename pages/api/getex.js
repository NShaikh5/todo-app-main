import connect from "../../lib/mongodb";

import Exercise from '../../model/Exercise'   


connect()

export default async function handler(req,res){

   const result =  await Exercise.find()
   res.send(result)
}