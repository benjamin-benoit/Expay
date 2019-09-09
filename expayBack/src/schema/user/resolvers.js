import users from '~/data/users'
import Expo from 'expo-server-sdk';

let expo = new Expo();

const resolvers = {
  Query: {
    users: async (obj, args, ctx, info) => {
      return users
    },
    user: async (obj, args, ctx, info) => {
      return users.find((user) => user.id === args.id)
    },
    search: async (obj, args, ctx, info) => {
      const { q } = args
      return users.filter(({ firstName, lastName }) => {
        const fullName = [firstName, lastName].join(' ');
        return fullName.toLowerCase().indexOf(q.toLowerCase()) > -1;
      })
    }
  },
  Mutation: {
    editUser: (obj, args, ctx, info) => {
      const { data } = args
      const index = users.findIndex((user) => user.id === args.id);
      users[index] = {
        ...users[index],
        firstName: data.firstName || users[index].firstName,
        lastName: data.lastName || users[index].lastName,
      }
      return users.find((user) => user.id === args.id)
    },
    storeUserExpoToken: (obj, args, ctx, info) => {
      const { token } = args;
      console.log('Got token.', token)
      return { success: true }
    },
    sendNotification: async (obj, args, ctx, info) => {
      const { token } = args;
      console.log('Sending notification.', token)
      if (!Expo.isExpoPushToken(token)) throw Error('Not a valid Expo token.')
      const message = {
        to: token,
        sound: 'default',
        body: 'This is a test notification',
        data: { conversationId: '1-upodjpiodjpiqwjdwqjd' },
      }
      let chunks = expo.chunkPushNotifications([message]);
      let success = false
      for (let chunk of chunks) {
        try {
          await expo.sendPushNotificationsAsync(chunk);
          success = true
        } catch (error) {
          console.error(error);
        }
      }
      return { success }
    }
  }
}

export default resolvers
