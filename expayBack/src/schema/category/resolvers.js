import category from '~/data/categories'
import Expo from 'expo-server-sdk';

let expo = new Expo();

const resolvers = {
    Query: {
        categories: async (obj, args, ctx, info) => {
            return category
        },
        category: async (obj, args, ctx, info) => {
            return category.find((category) => category.id === args.id)
        },
        searchCategory: async (obj, args, ctx, info) => {
            const {q} = args;
            return category.filter(({price}) => {
                return price.toLowerCase().indexOf(q.toLowerCase()) > -1;
            })
        },
        Mutation: {
            editCategory: (obj, args, ctx, info) => {
                const {data} = args
                const index = category.findIndex((category) => category.id === args.id);
                category[index] = {
                    ...category[index],
                    name: data.name || category[index].name,
                }
                return category.find((category) => category.id === args.id)
            },
        }
    }
};

export default resolvers
