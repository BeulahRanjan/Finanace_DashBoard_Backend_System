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