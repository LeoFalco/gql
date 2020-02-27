import * as server from './server'

server.startServer().catch(error => {
  console.error(error)
  process.exit(-1000)
})
