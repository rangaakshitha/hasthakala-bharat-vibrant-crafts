// fix-db.js
import sqlite3 from 'sqlite3';

const sqlite = sqlite3.verbose();
const db = new sqlite.Database('./hasthakala.db', (err) => {
  if (err) {
    console.error('❌ Error connecting to database:', err.message);
  } else {
    console.log('✅ Connected to SQLite database');
  }
});

db.serialize(() => {
  // Drop only the reviews table
  db.run(`DROP TABLE IF EXISTS reviews`, (err) => {
    if (err) {
      return console.error('❌ Error dropping reviews table:', err.message);
    }
    console.log('🗑️ Old reviews table dropped (if existed)');

    // Recreate the reviews table with correct schema
    db.run(
      `CREATE TABLE reviews (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT,
        phone TEXT,
        comment TEXT NOT NULL,
        rating INTEGER,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )`,
      (err) => {
        if (err) {
          console.error('❌ Error creating reviews table:', err.message);
        } else {
          console.log('✅ New reviews table created with correct columns');
          console.log('🔒 Users table remains untouched and safe');
        }

        db.close((err) => {
          if (err) {
            console.error('❌ Error closing database:', err.message);
          } else {
            console.log('📦 Database connection closed');
          }
        });
      }
    );
  });
});