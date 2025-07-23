// routes/reviews.js
import express from 'express';
import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to SQLite
const sqlite = sqlite3.verbose();
const db = new sqlite.Database(path.join(__dirname, '../hasthakala.db'), (err) => {
  if (err) {
    console.error('❌ Error connecting to SQLite:', err.message);
  } else {
    console.log('📦 Connected to database (from reviews route)');
  }
});

// 📨 POST review
router.post('/', (req, res) => {
  const { name, email, phone, comment, rating } = req.body;

  if (!name || !comment) {
    return res.status(400).json({ error: 'Name and comment are required.' });
  }

  const query = `
    INSERT INTO reviews (name, email, phone, comment, rating)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.run(query, [name, email, phone, comment, rating || null], function (err) {
    if (err) {
      console.error('❌ Error inserting review:', err.message);
      return res.status(500).json({ error: 'Failed to save review.' });
    }
    res.status(201).json({ message: 'Review submitted successfully!', reviewId: this.lastID });
  });
});

// 📤 GET all reviews
router.get('/', (req, res) => {
  const query = `SELECT * FROM reviews ORDER BY created_at DESC`;

  db.all(query, [], (err, rows) => {
    if (err) {
      console.error('❌ Error fetching reviews:', err.message);
      return res.status(500).json({ error: 'Failed to fetch reviews.' });
    }
    res.json(rows);
  });
});

export default router; // ✅ THIS IS CRUCIAL