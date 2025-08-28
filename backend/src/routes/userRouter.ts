import {  Router } from "express";
import { body } from 'express-validator';
import { handleInputErrors } from "../middleware/errorMiddleware";
import { createAccount, loginUser } from "../handlers/userHandle";
const router = Router()

router.post('/auth/register',
    body('email')
        .notEmpty()
        .withMessage('the field cannot be empty')
        .isEmail()
        .withMessage('the email must have a valid format'),
    body('password')
        .notEmpty()
        .withMessage('the field cannot be empty')
        .isLength({ min: 8 })
        .withMessage('The password must be at least eight characters long'),
    body('userName')
        .notEmpty()
        .withMessage('the field cannot be empty'),
    handleInputErrors,
    createAccount
)
router.post('/auth/login',
    body('email')
        .notEmpty()
        .withMessage('the field cannot be empty')
        .isEmail()
        .withMessage('the email must have a valid format'),
    handleInputErrors,
    loginUser
)
export default router