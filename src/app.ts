import express from 'express'
import { UserRouter } from './routes/UserRouter'

const app = express();

app.use(express.json());


app.use('/api/user', UserRouter);

export default app;
