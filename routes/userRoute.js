import express from "express";
import verifyToken from "../middlewares/verifyToken.js";
import authorize from "../middlewares/authorize.js";
import validate from "../middlewares/validate.js";
import { PERMISSIONS }  from "../utils/permissions.js";
import userController from "../controllers/userController.js";
import { createUserValidator, deleteUserValidator,updateRoleValidator} from "../helpers/userValidators";
import { updateStatusValidator } from "../helpers/userValidator.js";

const router = express.Router();

router.post("/",verifyToken,authorize(PERMISSIONS.CREATE_USER),createUserValidator, validate,userController.createUser);
router.delete("/:id",verifyToken,authorize(PERMISSSIONS.DELETE_USER), deleteUserValidator,validate,userController.deleteUser);
router.patch("/:id/role/:role", verifyToken,authorize(PERMISSION.ASSIGN_ROLE),updateRoleValidator,validate, userController.updateRole);
router.patch("/:id/status/:status",verifyToken,authorize(PERMISSIONS.CHANGE_USER_STATUS),updateStatusValidator, validate,userController.updateStatus)