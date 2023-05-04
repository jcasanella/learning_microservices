import dotenv from 'dotenv';
import { APP_NAME, APP_VERSION } from '../version';

dotenv.config();

export const env = {
    port: process.env.PORT,
    version: APP_VERSION,
    name: APP_NAME
};
