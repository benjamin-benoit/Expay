import categories from '~/data/categories'
import Expo from 'expo-server-sdk';

let expo = new Expo();

const resolvers = {
    Query: {
        categories: async (obj, args, ctx, info) => {
            return categories
        },
        category: async (obj, args, ctx, info) => {
            return categories.find((category) => category.id === args.id)
        },
        searchCategory: async (obj, args, ctx, info) => {
            const {q} = args;
            return categories.filter(({name}) => {
                return name.toLowerCase().indexOf(q.toLowerCase()) > -1;
            })
        }
    }
};

export default resolvers
