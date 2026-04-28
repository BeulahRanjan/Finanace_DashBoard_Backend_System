import User from "../models/userModel.js"
import { BadRequestError,ForbiddenError,InternalServerError} from "../errors/AppError.js";
import {ADMIN} from "../utils/constants.js";
import Role from "../models/roleModel.js"

const authorize=(requiredPermission)=> {
    return async (req, res, next) =>{
        const user =await User.findById(req.user);
        if(!user) throw new InternalServerError();
        const role=await Role.findById(user.role);
        if(!role) throw new InternalServerError();

        if(role.name==ADMIN){
            return next();
        }

        if(user.status === 'inactive'){
            throw new ForbiddenError("User is inactive");
        }

        if(!role.permissions.include(requirePermission)) {
            throw new ForbiddenError("Access Denied");
        }

        next();
    }
}

export default authorize;