import { dashboardRouter } from '../../Api-Server/src/api/Router';
import express from 'express';

const app = express()

app.use(express.json());

app.use("/dashboard", dashboardRouter)

