import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
// Use this object to send drizzle queries to your DB
// import * as schema from "./schema";
import * as schema from "./schema";

export const db = drizzle(sql, { schema });
