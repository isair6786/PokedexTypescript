import mongoose from "mongoose";
import colors from 'colors';

export const connectDB = async () => {
    try {
        const url = process.env.MONGO_URI || '';
        const connection = await mongoose.connect(url)
        const dataConnection = `${connection.connection.host}:${connection.connection.port}`
        console.log(colors.cyan(`Mongo DB conectado en ${dataConnection}`))
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(colors.bgRed(`Error: ${error.message}`));
        } else {
            console.log(colors.bgRed('Error desconocido al conectar con MongoDB'));
        }
    }
}