import dotenv from 'dotenv';
dotenv.config()
import colors from 'colors'
import app from './server'


const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(colors.yellow(`Servidor funcionando en puerto ${port}`))
})


