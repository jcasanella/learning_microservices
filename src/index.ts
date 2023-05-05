import dotenv from 'dotenv';
import Server from './express';

dotenv.config();

// const app: Express = express();
const port = process.env.PORT;

const app = new Server();
app.init();