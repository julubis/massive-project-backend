const User = require('../models/user.model');
const Profile = require('../models/profile.model');

const getUserInfo = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await User.findOne({ where: { id }, include: Profile, raw: true });
    if (!user) return res.status(404).json({ status: 'error', data: null, message: 'user not found' });
    return res.json({ status: 'success', data: user, message: null });
  } catch (e) {
    return res.status(500).json({ status: 'error', data: null, message: 'server error' });
  }
};

module.exports = { getUserInfo };
