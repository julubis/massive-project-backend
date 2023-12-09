const { query } = require('../services/db.service');

const getAllUser = async (req, res) => {
  try {
    const [, rows] = await query('SELECT * FROM user WHERE role = \'user\'');
    if (!rows?.length) return res.status(404).json({ status: 'error', data: null, message: 'user not found' });
    return res.json({ status: 'success', data: rows, message: null });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [, rows] = await query('DELETE FROM user WHERE id = ?', [id]);
    if (!rows?.length) return res.status(404).json({ status: 'error', data: null, message: 'user not found' });
    return res.json({ status: 'success', data: rows, message: null });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

module.exports = { getAllUser, deleteUser };
