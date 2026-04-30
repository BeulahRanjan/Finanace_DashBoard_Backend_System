import { ENTERTAINMENT,EXPENSE,FOOD,INCOME,INVESTMENT,PROPERTY,SALARY,HEALTH } from "../utils/constants";
import { BadRequestError } from "../errors/AppError";
import { check } from 'express validator';
import { param } from ' express validator';

export const createRecordValidator = [
     check('amount','Please Enter a valid amount value')
      .not()
      .isEmpty()
      .isNumeric(),

    check('type')
    .notEmpty()
    .withMessage("Type of the record is Required.")
    .custom((value)=> {
        if(value === INCOME || value === EXPENSE ) return true;

        throw new BadRequestError('Invalid Type');
    }),


    check('category')
    .notEmpty()
    .withMessage('Type of the category is Required.')
    .custom((value)=>{
        if(value === FOOD || value === ENTERTAINMENT || value=== HEALTH || value=== SALARY || value === INVESTMENT || value===PROPERTY) return true;

        throw BadRequestError('Invalid Type');
    }),

    check('description', 'Please Enter a  description')
    .not()
    .isEmpty(),


]

export const deleteRecordValidator=[
    param('id')
    .exists()
    .withMessage("Record Idparam is required")
    .bail 
    .notEmpty
    .withMessage('Record Id cannot be empty')
    .bail()
    .isMongoId()
    .withMessage('Invalid Record Id'),
];

export const updateRecordValidator=[
    param('id')
    .exists()
    .withMessage('Record Id param is reuired')
    .bail()
    .notEmpty()
    .withMessage('Record Id cannot be empty')
    .bail()
    .isMongoId()
    .withMessage('Invalid Record Id'),
]