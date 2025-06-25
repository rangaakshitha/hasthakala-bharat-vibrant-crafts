// server.js
import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import dotenv from 'dotenv';
import chatRoute from './routes/chat.js'; // ✅ ESM-style import
import reviewRoute from './routes/reviews.js';

dotenv.config();

const sqlite = sqlite3.verbose();
const db = new sqlite.Database('./hasthakala.db', (err) => {
  if (err) {
    console.error('❌ Error opening database:', err.message);
  } else {
    console.log('✅ Connected to SQLite database');
  }
});

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/reviews', reviewRoute);

// ✅ Mount AI Chatbot route
app.use('/chat', chatRoute);

// 🔐 Create users table at startup
db.run(
  `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )`,
  (err) => {
    if (err) {
      console.error('❌ Error creating users table:', err.message);
    } else {
      console.log('✅ Users table is ready');
    }
  }
);

// 🔗 Default route
app.get('/', (req, res) => {
  res.send('🎉 API is working!');
});

// 📝 Register endpoint
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  const query = `INSERT INTO users (username, password) VALUES (?, ?)`;
  db.run(query, [username, password], function (err) {
    if (err) {
      if (err.message.includes('UNIQUE constraint failed')) {
        return res.status(409).json({ error: 'Username already exists.' });
      }
      return res.status(500).json({ error: 'Database error.' });
    }
    res.status(201).json({ message: 'User registered successfully!', userId: this.lastID });
  });
});

// 🔐 Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
  db.get(query, [username, password], (err, row) => {
    if (err) {
      return res.status(500).json({ error: 'Database error.' });
    }
    if (!row) {
      return res.status(401).json({ error: 'Invalid username or password.' });
    }
    res.json({ message: 'Login successful!' });
  });
});

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

// ✅ Graceful shutdown
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('❌ Error closing DB connection:', err.message);
    }
    console.log('🛑 Closed the database connection.');
    process.exit(0);
  });
});
