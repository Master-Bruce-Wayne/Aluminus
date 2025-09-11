import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
// import authRoutes from './routes/auth.js'
// import mentorRoutes from './routes/mentors.js'
// import requestRoutes from './routes/requests.js'
// import donationRoutes from './routes/donations.js'
// import adminRoutes from './routes/admin.js'
import errorHandler from './middleware/errorHandler.js'

dotenv.config()
connectDB();

const app = express();

// middlewares
app.use(express.json());

// app.use(express.json({ limit: '5mb' }))
// app.use(cors({ origin: process.env.FRONTEND_URL || '*' }))
// if (process.env.NODE_ENV !== 'production') app.use(morgan('dev'))

app.get('/', (req, res) => res.send({ ok: true, message: 'Aluminus API' }))

app.use('/api/auth', authRoutes)
app.use('/api/mentors', mentorRoutes)
app.use('/api/requests', requestRoutes)
app.use('/api/donations', donationRoutes)
app.use('/api/admin', adminRoutes)

// central error handler
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
