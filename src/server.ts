import { GraphQLServer } from 'graphql-yoga'
import { PrismaClient } from '@prisma/client'
import resolvers from './graphql/resolvers'
import appUrl from './config'
import { Server } from 'http'
const prisma = new PrismaClient()

function createServer () : GraphQLServer {
  return new GraphQLServer({
    typeDefs: 'src/graphql/schema.graphql',
    resolvers: { ...resolvers },
    context: { prisma }
  })
}

const server = createServer()

async function startServer () : Promise<Server> {
  return server.start(() => console.log('🚀 Server ready at: ' + appUrl))
}

function stopServer (httpServer: Server): void{
  httpServer.close()
  console.log('server down: ' + appUrl)
}

export default {
  startServer,
  stopServer
}
