const Vue = require('nativescript-vue');
import {
    ApolloClient
} from 'apollo-client'
import {
    HttpLink
} from 'apollo-link-http'
import {
    InMemoryCache
} from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
// import  { WebSocketLink }  from "apollo-link-ws";
//import { SubscriptionClient } from "subscriptions-transport-ws";


const httpLink = new HttpLink({
    // You should use an absolute URL here
    uri: "https://hasura.sebastian-roy.de/v1/graphql", 
    headers: {
        "x-hasura-admin-secret": "blahblah"
      }

})

// const wsLink = new WebSocketLink({
//     uri: `wss://hasura.sebastian-roy.de/v1/graphql`,
//     options: {
//       reconnect: true,
//       connectionParams: {
//         headers: {
//           "x-hasura-admin-secret": "blahblah"
//         }
//       }
//     }
//   });


// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    connectToDevTools: true,
})

// const apolloClientSub = new SubscriptionClient('wss://hasura.sebastian-roy.de/v1/graphql',{
//     reconnect: true,
// })

// Install the vue plugin
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
  //  networkInterface: apolloClientSub
})

export default apolloProvider


// https://www.npmjs.com/package/subscriptions-transport-ws
// Error: TypeError: Cannot read property 'slice' of undefined
// https://stackoverflow.com/questions/56122341/nativescript-vue-graphql-backend