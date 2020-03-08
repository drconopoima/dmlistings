import { MongoClient } from "mongodb";
import { Database } from "../lib/types";

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_USER_PASSWORD}@${process.env.MONGODB_CLUSTER}.mongodb.net/test?retryWrites=true&w=majority`;

// // MongoDB OnPrem
// const uri = `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/test`

export const connectDatabase = async (): Promise<Database> => {
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const db = client.db(process.env.MONGODB_DATABASE);
  return {
    listings: db.collection(`${process.env.MONGODB_LISTINGS_COLLECTION}`)
  };
};
