import mongoose from "mongoose";
import { ACTIVE, aCTIVE, INACTIVE } from "../utils/constants.js";

const userSchema =new mongooseSchema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    role:{type:mongoose.Schema.Types.ObjectId,
        ref:'Role'},
    status: {
        type:String,
        enum:[ACTIVE, INACTIVE],
        default:ACTIVE
    }
});

const User = mongooose.model('User', userSchema);

export default User;