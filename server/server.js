import express from "express";
import "dotenv/config";
import cors from "cors";
import { connect } from "mongoose";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouters from './routes/bookingRoutes.js'
 

// Initialize Express app
const app = express()

// Connect Database
await connectDB()

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send("Server is runing"))
app.use('/api/user', userRouter)
app.use('/api/owner', ownerRouter)
app.use('/api/bookings',bookingRouters)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log (`Server runing on port ${PORT}`))
