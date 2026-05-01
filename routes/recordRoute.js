import express from "express";
import verifyToken from "../middlewares/verifyToken.js";
import authorize from "../middlewares/authorize.js";
import validate from "../middlewares/validate.js";
import { PERMISSIONS } from "../utils/permissions.js";
import recordController from "../controllers/recordController.js";
import { createRecordValidator, updateRecordValidator, deleteRecordValidator } from "../helpers/recordValidator.js";

const router =express.Router();

router.post("/",verifyToken,authorize(PERMISSIONS.CREATE_RECORDS),createRecordValidator,validate,recordController.createRecord);
router.get("/",verifyToken,authorize(PERMISSIONS.VIEW_RECORDS),recordController.getAllRecord);
router.delete("/:id", verifyToken,authorize(PERMISSIONS.DELETE_RECORDS),deleteRecordValidator,validate,recordController.deleteRecord);
router