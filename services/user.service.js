const { query } = require('./db.service');

const getUserByEmail = async (email) => {
  const [err, rows] = await query(
    'SELECT id, name, email, role, password FROM user WHERE email = ?',
    [email],
  );
  if (!rows?.length) return null;
  return rows[0];
};
