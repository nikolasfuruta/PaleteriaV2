/* eslint-disable @typescript-eslint/restrict-template-expressions */
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const uri = `${process.env.URI}`

export const connectDB = async (): Promise<void> => {
  await mongoose.connect(uri, {
  }).then(() => console.log('MongoDB connected...')).catch(err => console.log(err))
}
