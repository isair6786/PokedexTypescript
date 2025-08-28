import express from 'express'
import cors from 'cors' //ESM Ecmascript modules
import { connectDB } from './config/db'
import { corsConfig } from './config/cors'
import userRouter from './routes/userRouter'
import pokemonRouter from './routes/pokemonRouter'


const app = express()
connectDB()
app.use(cors(corsConfig))
// Para leer datos de formularios
app.use(express.json())

//Routing
app.use('/user' , userRouter)
app.use('/pokemon' , pokemonRouter)
export default app


