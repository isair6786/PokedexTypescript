import type { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken';
import User, { IUser } from "../models/UserModel";



declare global{
    namespace Express {
        interface Request{
            user?:IUser
        }
    }
}

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {

    // const bearer = req.headers.authorization
    
    // if( !bearer ){
    //     const error = new Error('User unauthorized')
    //     res.status(401).send({
    //         success: false,
    //         message: error.message
    //     })
    //     return;
    // }
    // const [, token] = bearer.split(' ')
    // if( !token ){
    //     const error = new Error('User unauthorized')
    //     res.status(401).send({
    //         success: false,
    //         message: error.message
    //     })
    //     return;
    // }

    try {
        // const tokenData = jwt.verify(token,process.env.JWT_SECRET);
        // if (typeof tokenData==='object' && tokenData.id){
        //     const user = await User.findById(tokenData.id).select('-password')
        //     if (!user) {
        //         const error = new Error('User not found!!')
        //         res.status(404).send({
        //             success: false,
        //             message: error.message
        //         })
        //         return;
        //     }
        //     req.user = user
        //     next()
        // }
        next()
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
        return;
    }

}