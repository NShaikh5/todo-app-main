import connect from "../../lib/mongodb";
import Exercise from '../../model/Exercise'   
 
connect()

export default async function handler(req,res){

    const {name,description, activityType, duration, date}=req.body;

    try{
        const exercise = await Exercise.create({
            name: name,
            description: description,
            activityType: activityType,
            duration: duration,
            date: date,
            
        });

        res.redirect('/activity')
    }
    catch(err){
        res.send(err.message)
    }
    
}