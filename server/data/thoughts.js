const { getConnection } = require('../db')

async function getThought(id) {
  const conn = await getConnection()
  const insertResultQuery = `SELECT * from thoughts WHERE id = '${id}'`
  const docResult =  await conn.query(insertResultQuery)
  return docResult.rows[0]
}

async function thoughts(options = {}) {
  const conn = await getConnection()
  const query = 'SELECT * from thoughts'
  const result = await conn.query(query)
  return result.rows
}

async function createThought({ body }) {
  const conn = await getConnection()
  const insertQuery = 'INSERT INTO thoughts(body) VALUES($1) RETURNING id'
  const result = await conn.query(insertQuery, [body])
  const id = result.rows[0].id
  return await getThought(id)
}

module.exports = {
  getThought,
  createThought,
  thoughts
}
