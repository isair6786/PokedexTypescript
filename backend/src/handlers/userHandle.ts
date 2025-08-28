import { Request, Response } from "express";
import User from "../models/UserModel";
import { IResponse } from '../interfaces/responseType';
import slug from "slug";
import { checkPassword, hashPassword } from "../utils/auth";
import { generateJWT } from "../utils/jwt";

export const createAccount = async (req: Request, res: Response) => {
    try {
        const { userName, password, email } = req.body;
        const isUserExists = await User.findOne({ userName })
        const isMailExists = await User.findOne({ email })
        if (isMailExists) {
            const error = new Error('An user with this email already exists')
            const response: IResponse = {
                message: error.message,
                isSuccess: false,
                data: []
            }
            res.status(409).send(response)
            return;
        }
        if (isUserExists) {
            const error = new Error('An user with this email already exists')
            const response: IResponse = {
                message: error.message,
                isSuccess: false,
                data: []
            }
            res.status(409).send(response)
            return;
        }

        const user = new User(req.body)
        user.password = await hashPassword(password)
        user.userName = slug(userName);

        await user.save()
        res.status(200).send({
            success: true,
            message: 'Account created successfully'
        })
        return;
    } catch (error: unknown) {
        let newError;
        if (error instanceof Error) {
            newError = new Error(`An error ocurred while inserting the user ${error}`)

        } else {
            newError = new Error(`An error ocurred while inserting the user`)

        }
        res.status(400).send(newError)
        return;

    }
}
export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const userExists = await User.findOne({ email });
        if (!userExists) {
            const error = new Error('No account found. Try a different email or sign up.')
            res.status(404).send({
                success: false,
                message: error.message
            })
            return;
        }

        var isCorrectPassword = await checkPassword(password, userExists.password);
        if (!isCorrectPassword) {
            const error = new Error('Invalid password. Please try again')
            res.status(401).send({
                success: false,
                message: error.message
            })
            return;
        } else {
            const token = generateJWT({ id: userExists._id })
            res.status(200).send({
                success: true,
                message: 'User login successfully',
                token: token
            })
            return;
        }
    } catch (ex) {
        const error = new Error(`An error ocurred while validating the user ${ex}`)
        res.status(400).send({
            success: false,
            message: error.message
        })
        return;
    }
}