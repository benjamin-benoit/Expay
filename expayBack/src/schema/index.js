import {mergeSchemas} from 'graphql-tools'
import userSchema from './user'
import productSchema from './product'
import categorySchema from './category'

const schema = mergeSchemas({
    schemas: [
        userSchema,
        productSchema,
        categorySchema,
    ],
})

export default schema
