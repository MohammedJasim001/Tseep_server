import { connectDB } from './config/db'
import { config } from './config/config'
import app from './app'

connectDB()

app.listen(config.SERVER_PORT,()=>{
    console.log(`server running on port ${config.SERVER_PORT}`);
})