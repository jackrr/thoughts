const { Pool } = require('pg')
const config = require('../config/db')

let pool

async function setupPool() {
  console.log('creating connection pool')
  pool = new Pool(config)
  pool.on('error', (err, client) => {
    console.error('Unexpected error on idle pg client', err)
    process.exit(-1)
  })
  return pool
}

async function getConnection() {
  if (!pool) await setupPool()
  return await pool.connect()
}

module.exports = {
  getConnection
}

