import { mergeSchemas } from 'graphql-tools'
import userSchema from './user'
import productSchema from './product'

const schema = mergeSchemas({
  schemas: [
    userSchema,
    productSchema,
  ],
})

export default schema
