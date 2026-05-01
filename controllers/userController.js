import { BadRequestError } from "../errors/AppError.js";
import userService from "../services/userService.js";

async function createUser(req,res, next) {
    try{
        await userService.createUser(req.body);
        res.status(201).json({
            success:true,
            message:"user created successfully!"
        })
    }
    catch(error){
        next(error);
    }
}

async function deleteUser(req, res, next){
    try{
        await userService.deleteUser(req.params.id);
        res.status(200).json({
            success:true,
            message:" User deleted successfully!"
        }) 
    }
    catch(error){
        next(error);
    }
}

async function updateRole(req,res,next){
    try{
        await userService.updateRole(req.params.id, req.params.role);
        res.status(200).json({
            success:true,
            message:"Role updated successfully!"
        })
    }
    catch(error){
        next(error);
    }
}

async function updateStatus(req,res,next){
    try{
        await userService.updateStatus(req.params.id,req.params.status);
        res.status(200).json({
        success:true,
        message:"Status updated successfully!"
        })
    }
    catch(error){
        next(error);
    }
}

const userController={
    createUser:createUser,
    deleteUser:deleteUser,
    updateRole:updateRole,
    updateStatus:updateStatus
}

export default userController;