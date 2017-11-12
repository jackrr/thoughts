const { getConnection } = require('../server/db')
const config = require('../config/db')

const createTableText = `
CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE TABLE IF NOT EXISTS thoughts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  body text,
  created_at timestamptz NOT NULL DEFAULT NOW()
);
`;

(async () => {
  try {
    const client = await getConnection()
    await client.query(createTableText)
    console.log('DB Setup Successfully')
    process.exit(0)
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
})()

