import mongoose from "mongoose";
import { ENTERTAINMENT,EXPENSE,FOOD,HEALTH,INCOME,INVESTMENT } from "../utils/constants";

const recordSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
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