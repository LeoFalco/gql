import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import nodeFetch from 'node-fetch'
import config from '../config'

const Client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({
    uri: config.appUrl,
    fetch: nodeFetch
  })
})

export default {
  ...Client
}
