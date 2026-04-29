import express from "express";
import verifyToken from "../middlewares/verifyToken.js";
import authorize from "../middlewares/authorize.js";
import validate from "../middlewares/validate.js";
import { PERMISSIONS }  from "../utils/permissions.js";
import userController from "../controllers/userController.js";
import { createUserValidator, deleteUserValidator} from "../helpers/userValidators";

const router = express.Router();

router.post("/",verifyToken,authorize(PERMISSIONS.CREATE_USER),createUserValidator, validate,userController.createUser);
router.delete("/:id",verifyToken,authorize(PERMISSSIONS.DELETE_USER), deleteUserValidator,validate,userController.deleteUser);