import express from "express";
import verifyToken from "../middlewares/verifyToken.js";
import authorize from "../middlewares/authorize.js";
import validate from "../middlewares/validate.js";
import { PERMISSIONS }  from "../utils/permissions.js";
import userController from "../controllers/userController.js";
import { createUserValidator} from "../helpers/userValidators";

const router = express.Router();

router.post("/",verifyToken,authorize(PERMISSIONS.CREATE_USER),createUserValidator, validate,userController.createUser)