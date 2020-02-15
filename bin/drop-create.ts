
import { sync } from 'cross-spawn'
import credentials from '../src/config'
import { Datasource } from './datasource'

async function dropCreate (): Promise<void> {
  console.log(credentials)
  try {
    const datasource = await Datasource.fromCredentials(credentials.databaseCredentials)
    const tables = await datasource.tableNames(credentials.databaseCredentials.database)
    await datasource.dropTables(tables)
    await datasource.createTableMigration()

    // Spawn NPM synchronously
    sync('rimraf', ['prisma/migrations'], { stdio: 'inherit' }) // remove migracoes antigas
    sync('npm', ['run', 'generate-schema'], { stdio: 'inherit' }) // genre nova migracao
    sync('npm', ['run', 'migrate'], { stdio: 'inherit' }) // aplica migracao

    console.log('sucess')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

dropCreate()
