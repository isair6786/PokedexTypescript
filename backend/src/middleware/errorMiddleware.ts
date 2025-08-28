import type { NextFunction, Request,Response } from "express"
import { validationResult } from 'express-validator';
import { IResponse } from "../interfaces/responseType";

export const handleInputErrors = (req: Request , res: Response ,next: NextFunction) =>{
      //Manejando errores
      let errors = validationResult(req);
    
      if (!errors.isEmpty()){
          let error:IResponse = {
            isSuccess : false,
            data:errors.array(),
            message: 'An error ocurred while validating data'
          }
          res.status(400).json(error)
          return;
      }
      next();
}