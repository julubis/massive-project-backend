const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/images'));
  },
  filename: (req, file, cb) => {
    const uuid = crypto.randomUUID();
    const ext = path.extname(file.originalname);
    req.uuid = uuid;
    req.ext = ext;
    cb(null, `${uuid}${ext}`);
  },
});

const upload = multer({ storage });
module.exports = upload;
