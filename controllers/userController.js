import userService from "../services/userServices.js";

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

const userController={
    createUser:createUser,
    deleteUser:deleteUser
}

export default userController;