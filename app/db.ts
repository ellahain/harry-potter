/**
 * MONGODB DATABASE CONNECTION - Ella
 * Provides centralized MongoDB database connection and collection access for the application.
 * Manages connection lifecycle and reuses connections.
 *
 * - Singleton pattern for MongoDB client (reuses connection)
 * - Environment-based configuration
 * - Type-safe collection access
 */
import {MongoClient, Db, Collection} from 'mongodb';

const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) {
    throw new Error('MongoDB URI environment variable is undefined');
}

const DB_NAME= "final-project"
export const RESULTS_COLLECTION="results-collection"

let client: MongoClient | null = null;
let db: Db | null = null;

async function connect(): Promise<Db> {
    if (!client) {
        client = new MongoClient(MONGO_URI);
        await client.connect();
    }
    return client.db(DB_NAME);
}

export default async function getCollection(collectionName: string): Promise<Collection> {
    if (!db){
        db = await connect();
    }
    return db.collection(collectionName);
}