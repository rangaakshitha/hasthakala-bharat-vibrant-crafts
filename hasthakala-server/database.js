// database.js (fully ESM-compatible)
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const Database = require('better-sqlite3');
const db = new Database('hasthakala.db');

// ✅ Create users table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  );
`);

// ✅ Create reviews table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    comment TEXT NOT NULL,
    rating INTEGER NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

export default db;
