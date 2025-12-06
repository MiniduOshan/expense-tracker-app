import {neon} from '@neondatabase/serverless-client';
import "dotenv.config";

//create sql connection
export const sql = process.env.DATABASE_URL;
export const db = neon(sql);