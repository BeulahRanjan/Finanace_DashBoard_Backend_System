import { check } from 'express-validator';
import { BadRequestError} from "../errors/AppError.js";
import { param } from "express-validator";
import {ACTIVE, ANALYST, INACTIVE, VIEWER } from '../utils/constants.js';

export const createUserValidator = [
    check('email','Please enter a valid E-mail Address')
       .isEmail()
       .normalizeEmail({
        gmail_remove_dots:true
       }),

       check('password', 'Password is Required.')
        .not()
        .isEmpty(),

        check('name', 'Name is Required.')
        .not()
        .isEmpty(),

        check('role')
          .notEmpty()
          .withMesssage('Role is Required.')
          .custom((values)=>{
            if( value === ANALYST || value === VIEWER) return true;

            throw new BadRequestError('Invalid role.Onlyanalyst,viewer allowed');
          }),
];


