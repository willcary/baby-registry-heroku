const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  password: 'BlueBird531%',
  host: 'localhost',
  port: 5432,
  database: 'registry',
})

module.exports = pool
