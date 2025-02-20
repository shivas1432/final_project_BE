import mysql2 from "mysql2";
import dotenv from "dotenv";

dotenv.config();


const db = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10, // Allow up to 10 connections
  queueLimit: 0
});


db.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("Connected to the database.");
    connection.release(); // Release the connection back to the pool
  }
});

export default db;
