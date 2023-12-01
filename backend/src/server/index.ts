import path from 'path';
import { Request, Response } from 'express';
import express from 'express';
import dotenv from 'dotenv';
import connectDB from '../config/db';
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from '../middleware/errorMiddleware';
import userRoutes from '../routes/userRoutes';

dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/users', userRoutes);

if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  );
} else {
  app.get('/', (req: Request, res: Response) => {
    res.send('API is running....');
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
