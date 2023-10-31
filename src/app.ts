import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import autoRoutes from './routes/autos.routes';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json())

app.use(autoRoutes)

export default app;