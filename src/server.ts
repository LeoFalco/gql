import { GraphQLServer } from 'graphql-yoga'
import { PrismaClient } from '@prisma/client'
import { Query, Mutation } from './graphql/resolvers'
import config from './config'
import { Server } from 'http'
const prisma = new PrismaClient()

function createServer () : GraphQLServer {
  return new GraphQLServer({
    typeDefs: 'src/graphql/schema.graphql',
    resolvers: { Query, Mutation },
    context: { prisma }
  })
}

const server = createServer()

async function startServer () : Promise<Server> {
  return server.start(() => console.log('🚀 Server ready at: ' + config.appUrl))
}

function stopServer (httpServer: Server): void{
  httpServer.close()
  console.log('server down: ' + config)
}

export default {
  startServer,
  stopServer
}
