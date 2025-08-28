import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document{
    userName: string
    password:string
    email:string
}

const userSchema = new Schema({
    userName:{
        type: String,
        required: true,
        unique:true,
        trim:true
    },
     password: {
        type : String,
        required:true,
        trim:true
    },
    email: {
        type : String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true
    }
})
//Definiendo Schemas
const User = mongoose.model<IUser>('User',userSchema);
export default User