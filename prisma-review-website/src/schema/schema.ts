import { makeSchema } from 'nexus'
import { nexusPrisma } from 'nexus-plugin-prisma'
import path from 'path'

import { Query } from './query'
import * as userTypes from './user'
import * as bookTypes from './book'
import * as reviewTypes from './review'


// makeSchema defines the GraphQL schema, by combining the the GraphQL types defined
// by the GraphQL Nexus layer or any manually defined GraphQLType objects
export const schema = makeSchema({
  types: {
    Query,
    userTypes,
    bookTypes,
    reviewTypes
  },
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    // GraphQL SDL file generation
    schema: path.join(process.cwd(), 'src/schema.graphql'),

    // Typescript declaration file generation settings. This file contains types
    // reflected off the source code
    typegen: path.join(process.cwd(), 'src/nexus.ts'),
  },
  contextType: {
    // Path to the module where the context type is exported
    module: path.join(process.cwd(), 'src/context.ts'),
    export: 'Context'
  }
})