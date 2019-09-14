import product from '~/data/products'
import categories from "../../data/categories";
import Expo from 'expo-server-sdk';

let expo = new Expo();

const resolvers = {
    Query: {
        products: async (obj, args, ctx, info) => {
            return product
        },
        product: async (obj, args, ctx, info) => {
            return  product.find((product) => product.id === args.id)
        },
        productByUserID: async (obj, args, ctx, info) => {
            const tab = [];
            product.find((product) => {
                if (product.userId === args.userId) {
                    tab.push(product)
                }
            });
            return tab;
        },
        productByCategory: async (obj, args, ctx, info) => {
            const tab = [];
            product.find((product) => {
                if (product.idCategory === args.idCategory) {
                    tab.push(product)
                }
            });
            return tab;
        },
        searchProduct: async (obj, args, ctx, info) => {
            const {q} = args;
            return product.filter(({price}) => {
                return price.toLowerCase().indexOf(q.toLowerCase()) > -1;
            })
        }
    },
    Product: {
        category: async (obj, args, ctx, info) => {
            return categories.find(category => obj.idCategory === category.id)
        },
    },
    Mutation: {
        editProduct: (obj, args, ctx, info) => {
            const {data} = args
            const index = product.findIndex((product) => product.id === args.id);
            product[index] = {
                ...product[index],
                name: data.name || product[index].name,
                price: data.price || product[index].price,
                details: data.details || product[index].details,
                idCategory: data.idCategory || product[index].idCategory
            }
            return product.find((product) => product.id === args.id)
        },
    }
};

export default resolvers
