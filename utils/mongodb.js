import { MongoClient } from 'mongodb'

const { MONGO_DB_URI, MONGO_DB_NAME } = process.env

if (!MONGO_DB_URI) {
  throw new Error(
    'Please define the MONGO_DB_URI environment variable inside .env.local'
  )
}

if (!MONGO_DB_NAME) {
  throw new Error(
    'Please define the MONGO_DB_NAME environment variable inside .env.local'
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongo

if (!cached) {
  cached = global.mongo = { conn: null, promise: null }
}

export async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }

    cached.promise = MongoClient.connect(MONGO_DB_URI, options).then((client) => {
      return {
        client,
        db: client.db(MONGO_DB_NAME),
      }
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}