
const isProduction = true // (process.env.PROD || 'false') === 'true'

const appUrl: string = isProduction ? 'https://gql-leo.herokuapp.com/' : 'http://localhost:4000'

export interface DatabaseConfig {
  host: string;
  url: string;
  user: string;
  password: string;
  database: string;
  port: number;
}

function credentialsFromEnv(): DatabaseConfig {
  // exemple url mysql://user:pass@host:port/database?reconnect=true
  const connectionString = 'mysql://tsv0j2hl5m7q14l2:y1uzfzvtvo7kuwhp@g3v9lgqa8h5nq05o.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/c572ymepzv3e1tq5'

  if (!connectionString) {
    throw new Error('GQL_DATANASE_URL variable not provided')
  }

  console.log(connectionString)
  const url = 'mysql://' + connectionString.split('@')[1]
  const user = connectionString.split('://')[1].split(':')[0]
  const password = connectionString.split('://')[1].split(':')[1].split('@')[0]
  const host = connectionString.split('@')[1].split(':')[0]
  const database = connectionString.split('@')[1].split('/')[1].split('?')[0]
  const port = parseInt(connectionString.split('@')[1].split(':')[1].split('/')[0] || (3306 + ''))
  return {
    host,
    url,
    user,
    password,
    database,
    port
  }
}

const databaseCredentials = credentialsFromEnv()

export default {
  isProduction,
  appUrl,
  databaseCredentials
}
