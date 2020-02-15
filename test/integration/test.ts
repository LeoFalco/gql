/* eslint-disable jest/no-hooks */
import { startServer, stopServer } from '../../src/server'
import { client } from '../../src/graphql/client'
import spawn from 'cross-spawn'

import * as query from '../../src/graphql/query'
import { Server } from 'http'

let server: Server

describe('integration tests', function () {
  beforeAll(async () => {
    spawn.sync('npm', ['run', 'clean-data'], { stdio: 'inherit' }) // aplica migracao
    server = await startServer()
  })

  afterAll(async () => {
    if (server) {
      stopServer(server)
    }
  })

  describe('atendimentos', function () {
    it('query atendimentos shoud respond with data', async () => {
      expect.assertions(1)
      const result = await client.query({
        query: query.ATENDIMENTOS
      })
      expect(result.data).toBeInstanceOf(Array)
    })
  })

  describe('produtos', function () {
    it('query produtos shoud respond with data', async function () {
      expect.assertions(1)
      const result = await client.query({
        query: query.PRODUTOS
      })
      expect(result.data).toBeInstanceOf(Array)
    })
  })
})
