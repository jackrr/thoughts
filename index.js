const { buildSchema } = require('graphql')
const express = require('express')
const graphqlHTTP = require('express-graphql')

const { createThought, thoughts, getThought } = require('./server/data/thoughts');

var schema = buildSchema(`
  interface Node {
    id: ID!
  }

  type Thought implements Node {
    id: ID!
    body: String
  }

  type Edge {
    node: Node!
    cursor: String!
  }

  type Page {
    edges: [Edge]
    pageInfo: PageInfo
  }

  type PageInfo {
    endCursor: String
    hasNextPage: Boolean
  }

  type Mutation {
    addThought(body: String): Thought
  }

  type Query {
    thought(id: String): Thought
    thoughts: [Thought]
  }
`)

var root = {
  thoughts: async () => {
    return await thoughts()
  },
  thought: async ({ id }) => {
    return await getThought(id)
  },
  addThought: async ({ body }) => {
    return await createThought({ body })
  }
}

const app = express()

app.use('/', express.static('public'))
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}))

app.listen(3000)

console.log('Running graphql api at localhost:3000/graphql')
