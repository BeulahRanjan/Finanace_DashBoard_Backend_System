import mongoose from "mongoose";
import { ENTERTAINMENT,EXPENSE,FOOD,SALARY,HEALTH,PROPERTY,INCOME,INVESTMENT } from "../utils/constants.js";

const recordSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    amount:Number,
    type:{
        type:String,
        enum:[EXPENSE,INCOME], 

    },
    category:{
        type:String,
        enum:[FOOD,ENTERTAINMENT,HEALTH,SALARY,PROPERTY,INVESTMENT]
    },
    date:{
        type:Date
    },
    description: {
  type: String
}
})

const Record= mongoose.model('Record', recordSchema);

export default Record;