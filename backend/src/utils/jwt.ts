import jwt , { JwtPayload} from 'jsonwebtoken'
export const  generateJWT = ( payload : JwtPayload ) => {
    const secret = process.env.JWT_SECRET
    if (secret && secret!=undefined){
        const token = jwt.sign(payload,secret,{
            expiresIn: '180d'
        })
        return token
    }else{
        return new Error("An error occurred while generating the token")
    }
}