import dotenv from 'dotenv'

dotenv.config()

export const PORT=process.env.PORT;
export const MONGO_URI=process.env.MONGO_URI;

export const SECRET_JWT=process.env.SECRET_JWT
console.log(SECRET_JWT)
export const SECRET_KEY=process.env.SECRET_KEY;