import express from "express";
import db from "../config/db.js";

const router = express.Router();

router.get("/uk-cities", (req, res) => {
  db.getConnection((err, connection) => {
    if (err) {
      console.error("Database connection error:", err);
      return res.status(500).json({ error: "Database connection error" });
    }

    const sql = "SELECT * FROM uk_cities";
    connection.query(sql, (queryErr, results) => {
      connection.release(); // Always release connection back to pool

      if (queryErr) {
        console.error("Database query error:", queryErr);
        return res.status(500).json({ error: "Database query error" });
      }

      res.json(results);
    });
  });
});

export default router;
