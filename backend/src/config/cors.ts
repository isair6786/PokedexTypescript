import {CorsOptions } from 'cors'
export const corsConfig:CorsOptions = {
    origin(requestOrigin, callback) {
        const whiteList : (string | undefined)[]  = process.env.WHITELIST_URL?.split(";") || []
        
        //To enable the use of tool of API Testing like Postman
        if (process.argv.includes("--api")){
            whiteList.push(undefined)
        }
        console.log(process.argv)
        whiteList.push(undefined)
       
        if ( whiteList.includes(requestOrigin)){
            callback(null, true)
        }else{
            callback(new Error('Cors Error'))
        }
    },
}