const { query } = require('../services/db.service');

const getAllActivity = async (req, res) => {
  try {
    const [, rows] = await query('SELECT * FROM activity');
    return res.json({ status: 'success', data: rows, message: null });
  } catch (e) {

  }
};

module.exports = { getAllActivity };
