const path = require('path');

const getImage = (req, res, next) => {
  const { id } = req.params;
  res.sendFile(`${id}.webp`, { root: path.join(__dirname, '../public/images') }, (err) => {
    if (err) return res.status(404).json({ status: 'error', data: null, message: 'file not found' });
    return next();
  });
};

module.exports = getImage;
