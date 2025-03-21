import dotenv from 'dotenv'
dotenv.config()

export const config = {
    MONGO_URI : process.env.MONGO_URI,
    SERVER_PORT : process.env.SERVER_PORT,
    FRONT_END_URL : process.env.FRONT_END_URL,
    JWT_SECRET_KEY : process.env.JWT_SECRET_KEY,
}