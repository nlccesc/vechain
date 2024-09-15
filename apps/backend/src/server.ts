import { App } from '@/app';
import { initializeOpenAI } from './utils/initializeOpenAI';
import { SubmissionRoute } from './routes/submission.route';
// import * as dotenv from 'dotenv';
// dotenv.config({ path: '../.env' });

export const openAIHelper = initializeOpenAI();

const app = new App([new SubmissionRoute()]);

app.listen();
