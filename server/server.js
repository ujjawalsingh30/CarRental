import express from "express";
import "dotenv/config";
import cors from "cors";
import { connect } from "mongoose";
import connectDB from "./configs/db.js";
 

// Initialize Express app
const app = express()

// Connect Database
await connectDB()

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send("Server is runing"))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log (`Server runing on port ${PORT}`))
