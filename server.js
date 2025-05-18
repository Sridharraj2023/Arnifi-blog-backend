// server.js
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import authRouter from './routes/authRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import protect from './middleware/authMiddleware.js';
import connectDB from './config/db.js';

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/blogs', protect, blogRoutes); // Protect blog routes

// MongoDB Connection
connectDB();

app.get("/", (req, res) => {

    res.send("Server Connected");
    
});

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {console.log(`Server Started on port http://localhost:${PORT}`)});