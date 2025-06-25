import express from 'express';
import db from '../database.js';

const router = express.Router();

// POST /api/reviews
router.post('/', (req, res) => {
  const { name, comment, rating } = req.body;
  if (!name || !comment || !rating) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const stmt = db.prepare(`INSERT INTO reviews (name, comment, rating) VALUES (?, ?, ?)`);
    const result = stmt.run(name, comment, rating);
    res.status(201).json({ success: true, id: result.lastInsertRowid });
  } catch (err) {
    console.error('❌ Review insert error:', err.message);
    res.status(500).json({ error: 'Database error.' });
  }
});

// GET /api/reviews
router.get('/', (req, res) => {
  try {
    const stmt = db.prepare(`SELECT * FROM reviews ORDER BY created_at DESC`);
    const reviews = stmt.all();
    res.json(reviews);
  } catch (err) {
    console.error('❌ Review fetch error:', err.message);
    res.status(500).json({ error: 'Database error.' });
  }
});

export default router;
