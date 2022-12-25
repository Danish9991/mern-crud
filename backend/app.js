import express from "express";
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import {errorMiddleware} from './middlewares/errorMiddleware.js'
import UserRoutes from './routes/userRoutes.js'
dotenv.config()

connectDb();

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended : false }));

const PORT = process.env.PORT || 5000;
//routes
app.use('/api/users', UserRoutes);
app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})