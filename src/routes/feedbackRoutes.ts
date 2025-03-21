import express from 'express'
import { userAuth } from '../middlewares/authMiddleware'
import { addFeedback } from '../controllers/feedbackController'

const feedbackRouter = express.Router()

feedbackRouter.post('/feedback',userAuth,addFeedback)

export default feedbackRouter