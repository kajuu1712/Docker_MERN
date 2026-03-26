import { MongoClient } from "mongodb";

const MONGO_URL = "mongodb://me_admin:my_psw_mongo@mongo:27017";

const client = new MongoClient(MONGO_URL);

let db;

export async function connectDB() {
  await client.connect();
  db = client.db("my-sample-db");
  console.log("Mongo connected");
}

export { db };