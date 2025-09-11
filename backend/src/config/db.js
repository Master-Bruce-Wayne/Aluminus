import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export default function connectDB(){
  const uri = process.env.MONGO_URI
  if(!uri) {
    console.error('MONGO_URI not set in .env')
    process.exit(1)
  }
  mongoose.connect(uri, { })
    .then(()=> console.log('MongoDB connected'))
    .catch(err => {
      console.error('Mongo connection error', err)
      process.exit(1)
    })
}
