import 'dotenv/config';

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const sql = neon(process.env.DATABASE_URL);

const db = drizzle(sql, {
    log: process.env.NODE_ENV === "development",
});

export default { db, sql };
