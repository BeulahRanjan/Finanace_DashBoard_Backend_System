import User from "../models/userModel.js"
import {BadRequestError} from "../errors/AppError.js"
import bcrypt from "bcrypt"
import { ObjectId } from "mongoose"
import Role from "../models/roleModel.js"

async function createUser(data){
    const {name, email, password, role}= data;
    const isExist = await User.findOne({email});
    if(isExist) throw new BadRequestError("User already Exists");
    const roleData= await Role.findOne({name:role});
    if(!roleData) throw new BadRequestError("Invalid Role");
    const hashedPassword =await bcrypt.hash(password,10);
    const newUser =new User({name, email, password:hashedPassword, role:roleData._id});
    const savedUser =await newUser.save();
}

async function deleteUser(userId){
    const isExist=await User.findById(userId);
    if(!isExist) throw new BadRequestError("User Does Not Exist");
    await User.findByIdAndDelete(userId);
}

const userRepositary={
    createUser:createUser,
    deleteUser:deleteUser
}
export default userRepositary;