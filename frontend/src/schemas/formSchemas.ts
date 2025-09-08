
import {  z } from "zod";

const schemaLoginValidate = z.object({
    email: z.email("Invalid email address").nonempty("test"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});
const schemaRegisterValidate = z.object({
    username: z.string().min(2,"Name must be at least 2 characters"),
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword:z.string().nonempty("Confirm password is required")
}).refine((validate) =>validate.password === validate.confirmPassword,{
    path : ["confirmPassword"],
    message: "Passwords don't match"
})

export type TLoginForm = z.infer<typeof schemaLoginValidate>;
export type TRegisterForm = z.infer<typeof schemaRegisterValidate>;

export {
    schemaLoginValidate,
    schemaRegisterValidate
};