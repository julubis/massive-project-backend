const fs = require('fs');
const sharp = require('sharp');
const Joi = require('joi');
const { query, update } = require('../services/db.service');

const getProfile = async (req, res) => {
  try {
    const { id, role } = req.user;
    let sql = 'SELECT user.id, user.name, user.email, profile.birthday, user.photo, TIMESTAMPDIFF(YEAR, profile.birthday, CURDATE()) AS age, profile.gender, profile.weight, profile.height, profile.activity_level, user.registered_at FROM user JOIN profile ON (profile.user_id = user.id) WHERE user.id = ?';
    if (role === 'admin') sql = 'SELECT id, name, email, photo, registered_at FROM user WHERE id = ?';
    const [, rows] = await query(sql, [id]);
    if (!rows?.length) return res.status(404).json({ status: 'error', data: null, message: 'user not found' });
    return res.json({ status: 'success', data: rows[0], message: null });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

const createProfile = async (req, res) => {
  try {
    const { id } = req.user;
    const schema = Joi.object({
      gender: Joi.string().valid('male', 'female').required(),
      birthday: Joi.string().isoDate().required(),
      weight: Joi.number().required(),
      height: Joi.number().required(),
      activity_level: Joi.number().integer().min(1).max(5)
        .required(),
    });
    const { value, error } = schema.validate(req.body);
    if (error) return res.status(400).json({ status: 'error', data: null, error: error.message });
    const {
      gender, birthday, weight, height, activity_level,
    } = value;

    const [err] = await query('INSERT INTO profile(user_id, gender, birthday, weight, height, activity_level) VALUES (?, ?, ?, ?, ?, ?)', [id, gender, birthday, weight, height, activity_level]);
    if (err?.code === 'ER_DUP_ENTRY') return res.status(400).json({ status: 'error', data: null, error: 'profile already exist' });
    if (err) return res.status(400).json({ status: 'error', data: null, error: 'create profile failed' });

    return res.json({ status: 'success', data: value, message: 'profile created' });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

const editProfile = async (req, res) => {
  try {
    const { id, role } = req.user;
    const schema = Joi.object({
      name: Joi.string().trim(),
      gender: Joi.string().valid('male', 'female'),
      birthday: Joi.string().isoDate(),
      weight: Joi.number(),
      height: Joi.number(),
      activity_level: Joi.number().integer().min(1).max(5),
      photo: Joi.binary(),
    });
    const { value, error } = schema.validate(req.body);
    if (error) return res.status(400).json({ status: 'error', data: null, error: error.message });
    const {
      name, gender, birthday, weight, height, activity_level,
    } = value;

    let qUser = name ? 'name = ?' : '';
    let qValues = name ? [name] : [];

    if (role !== 'admin') {
      const [q, values] = update({
        gender, birthday, weight, height, activity_level,
      });
      if (q) {
        const [, rows] = await query(
          `UPDATE profile SET ${q} WHERE user_id = ?`,
          [...values, id],
        );

        if (!rows?.affectedRows) return res.status(400).json({ status: 'error', data: null, error: 'update profile failed' });
      }
    }

    const imagePath = req.file?.path;
    if (imagePath) {
      if (req.ext !== '.webp') {
        const outputPath = imagePath.replace(/\.[^/.]+$/, '.webp');
        await sharp(imagePath).toFormat('webp', { quality: 100 }).toFile(outputPath);
        fs.unlink(imagePath, (err) => { if (err) console.error(err); });
      }

      qUser += ', photo = ?';
      qValues = [...qValues, req.uuid];
    }
    if (qUser) {
      const [, rows] = await query(`UPDATE user SET ${qUser} WHERE id = ?`, [...qValues, id]);
      if (!rows?.affectedRows) return res.status(400).json({ status: 'error', data: null, error: 'update profile failed' });
    }

    return res.json({ status: 'success', data: null, message: 'edit profile success' });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

module.exports = { editProfile, getProfile, createProfile };
