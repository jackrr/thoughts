const prodConfig = {
  host: 'todo',
  port: 'todo',
  database: 'lifehub',
  user: 'test',
  password: 'secretpassword',
}


const devConfig = {
  host: 'localhost',
  port: '5432',
  database: 'lifehub',
  user: 'lifehub',
  password: 'test',
}

if (process.env.NODE_ENV === 'production') {
  module.exports = prodConfig
} else {
  module.exports = devConfig
}
