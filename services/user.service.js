const connection = require('./db.service');

async function getUserProfile(id) {
  const db = await connection;
  const [rows, fields] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
  return rows.length ? rows[0] : null;
}
