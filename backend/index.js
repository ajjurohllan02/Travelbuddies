
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import tourRoute from './routes/tours.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

mongoose.set('strictQuery', false);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      
    })
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB database connection failed');
  }
};

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/tours',tourRoute)

app.listen(port, () => {
    connect();
  console.log(`Server is running on port: ${port}`);
});
