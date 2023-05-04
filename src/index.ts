import dotenv from 'dotenv';
// import express, {Express, Request, Response} from 'express';

import { createExpressApp } from "./express";
import { APP_NAME } from './version';

dotenv.config();

// const app: Express = express();
const port = process.env.PORT;

const app = createExpressApp();

function start() {
  app.listen(port, signalAppStart);
}

function signalAppStart() {
  console.log(`${APP_NAME} started in port ${port}`);
}

start();