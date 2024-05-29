import express, { Express, json } from "express";
import cors from "cors";

import motionRouter from './Routes/motion.router';

// const 
const PORT:number = 4000;
const app:Express = express();

// JSON
app.use(express.json());
app.use(cors());

// ROUTES

app.use('/api', motionRouter);

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});

export default app;
