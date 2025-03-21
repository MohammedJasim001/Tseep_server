import Questions from "../models/questionModel"

export const getQuestions = async () => {
    const questions = await Questions.find()
    return questions
}