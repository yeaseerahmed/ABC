import { pool } from "./db";

export async function getUsers() {
  const result = await pool.query("SELECT name FROM users");
  return result.rows;
}