import mongoose from "mongoose";
import Image from "next/image";

const Exercise = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    activityType:{
        type: String,
        enum : ["Swimming", "Running", "Bicycle", "Hiking", "Walking"]
    },
    duration:{
        type: Number
    },
    date: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.models.Exercise || mongoose.model('Exercise',Exercise)