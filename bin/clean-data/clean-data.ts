import mysql from 'promise-mysql'
import { Datasource } from '../datasource'
import config from '../../src/config'

export async function cleanData(): Promise<void> {
  const datasource = await Datasource.fromCredentials(config.databaseCredentials)
  let tables = await datasource.tableNames(config.databaseCredentials.database)
  tables = tables.filter(tableName => tableName !== '_Migration')

  await datasource.truncateTables(tables)
}
