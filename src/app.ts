import express from 'express'
import cors from 'cors'
import { config } from './config/config'
import globalErrorHandler from './middlewares/globalErrorHandler'
import authRouter from './routes/authRouter'
import questionRoutes from './routes/questionRoutes'
import feedbackRouter from './routes/feedbackRoutes'
 
const app = express()

app.use(express.json())

app.use(
    cors({
        origin:config.FRONT_END_URL,
        credentials:true
    })
)

app.use('/api/auth',authRouter)
app.use('/api',questionRoutes)
app.use('/api',feedbackRouter)

app.use(globalErrorHandler)

export default app