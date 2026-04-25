import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",        // your username
  host: "localhost",
  database: "A",
  password: "raja",
  port: 5432,
});