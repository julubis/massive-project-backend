const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  // multipleStatements: true,
  ssl: {
    minVersion: 'TLSv1.2',
    rejectUnauthorized: true,
  },
});

const connect = () => new Promise((resolve, reject) => {
  db.connect((err) => (err ? reject(err) : resolve()));
});

const query = (sql, values) => new Promise((resolve) => {
  db.execute(sql, values, (err, rows, fields) => {
    resolve([err, rows, fields]);
  });
});

const where = (obj) => {
  const filterObj = Object.entries(obj)
    .filter(([, value]) => value !== undefined && value !== '');
  const sql = filterObj
    .map(([key]) => (`${key} = ?`))
    .join(' AND ');
  return [sql, filterObj.map(([, value]) => value)];
};

const update = (obj) => {
  const filterObj = Object.entries(obj)
    .filter(([, value]) => value !== undefined);
  const sql = filterObj
    .map(([key]) => (`${key} = ?`))
    .join(', ');
  return [sql, filterObj.map(([, value]) => value)];
};

module.exports = {
  connect, query, where, update,
};
