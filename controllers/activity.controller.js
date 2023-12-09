const Joi = require('joi');
const { query } = require('../services/db.service');

const getAllActivity = async (req, res) => {
  try {
    const schema = Joi.object({
      name: Joi.string().trim(),
      page: Joi.number().integer().min(1).default(1),
      pageSize: Joi.number().integer().min(1).default(10),
    });
    const { value, error } = schema.validate(req.query);
    if (error) return res.status(400).json({ status: 'error', data: null, message: error.message });

    const {
      name, page, pageSize,
    } = value;

    let q = '';
    let values = [];

    if (name) {
      q = 'MATCH (name) AGAINST (? IN NATURAL LANGUAGE MODE)';
      values = [name];
    }

    const [, rows] = await query(`SELECT COUNT(*) AS total FROM activity ${q ? `WHERE ${q}` : ''}`, values);
    const { total } = rows[0];
    const [err, activities] = await query(
      `SELECT * FROM activity ${q ? `WHERE ${q}` : ''} LIMIT ${pageSize} OFFSET ${(page - 1) * pageSize}`,
      values,
    );
    if (err) console.log(err);

    return res.json({
      status: 'success',
      data: {
        activities, total, page, pageSize, pageTotal: Math.ceil(total / pageSize),
      },
      message: null,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

const addActivity = async (req, res) => {
  try {
    const schema = Joi.object({
      name: Joi.string().trim().required(),
      met: Joi.number().required(),
    });
    const { value, error } = schema.validate(req.body);
    if (error) return res.status(400).json({ status: 'error', data: null, message: error.message });

    const {
      name, met,
    } = value;

    const [err] = await query('INSERT INTO activity (name, met) VALUES (?, ?)', [name, met]);
    if (err?.code === 'ER_DUP_ENTRY') return res.status(400).json({ status: 'error', data: null, error: 'Activity already exist' });
    if (err) throw err;

    return res.json({
      status: 'success',
      data: { activity: value },
      message: null,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

const editActivity = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(+id)) return res.status(400).json({ status: 'error', data: null, message: 'id not a integer' });

    const [, rows] = await query('SELECT id FROM activity WHERE id = ? ', [+id]);
    if (!rows?.length) return res.status(404).json({ status: 'error', data: null, message: 'Activity not found' });

    const schema = Joi.object({
      name: Joi.string().trim().required(),
      met: Joi.number().required(),
    });
    const { value, error } = schema.validate(req.body);
    if (error) return res.status(400).json({ status: 'error', data: null, message: error.message });

    const {
      name, met,
    } = value;

    const [err] = await query('UPDATE activity SET name = ?, met = ? WHERE id = ?', [name, met, +id]);
    if (err) throw err;

    return res.json({
      status: 'success',
      data: { food: value },
      message: null,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

const deleteActivity = async (req, res) => {
  try {
    const { id } = req.params;
    if (!Number.isInteger(+id)) return res.status(400).json({ status: 'error', data: null, message: 'id not a integer' });

    const [, rows] = await query('DELETE FROM activity WHERE id = ? ', [+id]);
    if (!rows?.affectedRows) return res.status(404).json({ status: 'error', data: null, message: 'Activity not found' });

    return res.json({ status: 'success', data: null, message: null });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

module.exports = {
  getAllActivity, addActivity, editActivity, deleteActivity,
};

module.exports = { getAllActivity };
