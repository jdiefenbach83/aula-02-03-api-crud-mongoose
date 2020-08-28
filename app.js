import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { studentRouter } from './routes/studentRouter.js';

//Conecta ao MongoDB pelo Mongoose
(async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Error to connect on MongoDB. ' + error);
  }
})();

const app = express();
app.use(express.json());
app.use(studentRouter);

app.listen(process.env.HTTP_PORT, () => console.log('API Iniciada'));
