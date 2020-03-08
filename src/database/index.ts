import { MongoClient } from "mongodb";
import { Database } from "../lib/types";

// Shared Details
const userMongo = "<user>";
const dbMongo = "<db_name>";
const collectionMongo = "<collection_name>";
const passwordMongo = "<password>";

// MongoDB Atlas
const clusterMongo = "<atlas-cluster-id>";
const uri = `mongodb+srv://${userMongo}:${passwordMongo}@${clusterMongo}.mongodb.net/test?retryWrites=true&w=majority`;

// // MongoDB OnPrem
// const host = "<ip>";
// const port = "<port>"
// const uri = `mongodb://<${host}>:${port}/test`

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const db = client.db(dbMongo);
  return {
    listings: db.collection(collectionMongo)
  };
};
