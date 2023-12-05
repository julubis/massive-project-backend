const connection = require('./db.service');

async function login(email, password) {
  const db = await connection;
  const sql = 'SELECT id, name, email FROM users WHERE email = ? AND password = ?';
  const [rows] = await db.query(sql, [email, password]);
  return rows.length ? rows[0] : null;
}

async function register(name, email, password) {
  const db = await connection;
  const sql = `INSERT INTO users(name, email, password, role)
               VALUES (?, ?, ?, 'user')`;
  const [rows] = await db.execute(sql, [name, email, password]);
  return rows.length ? rows[0] : null;
}

module.exports = { login, register };
