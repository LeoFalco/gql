import mysql from 'promise-mysql'
import { Datasource } from './datasource'
import config from '../src/config'

async function cleanData (): Promise<void> {
  try {
    const datasource = await Datasource.fromCredentials(config.databaseCredentials)
    let tables = await datasource.tableNames(config.databaseCredentials.database)
    tables = tables.filter(tableName => tableName !== '_Migration')

    await datasource.truncateTables(tables)

    console.log('ok')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

cleanData()
