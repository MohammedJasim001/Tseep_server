import express from 'express'
import { getQuestions } from '../controllers/questionController'
import { userAuth } from '../middlewares/authMiddleware'

const questionRoutes = express.Router()

questionRoutes.get('/questions',userAuth,getQuestions)

export default questionRoutes