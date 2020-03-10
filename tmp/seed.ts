require("dotenv").config();

import assert from "assert";
import { connectDatabase } from "../src/database";
const listings = require(`${process.env.SEED_DATA_JSON_FILE}`);

const seedCollection = async () => {
  try {
    console.log(
      `Seeding from "${process.env.SEED_DATA_JSON_FILE}" into MongoDB Atlas "${process.env.MONGODB_CLUSTER}" with user "${process.env.MONGODB_USER}", under the DB "${process.env.MONGODB_DATABASE}" and collection "${process.env.MONGODB_LISTINGS_COLLECTION}"`
    );
    const database = await connectDatabase();
    await database.listings.insertMany(listings, function(err, _result) {
      assert.equal(err, null);
      console.log(
        `[SUCCESS] Inserted documents from "${process.env.SEED_DATA_JSON_FILE} into collection ${process.env.MONGODB_LISTINGS_COLLECTION}`
      );
    });
  } catch {
    throw new Error(
      `[FAILURE] Couldn't seed elements from seed file "${process.env.SEED_DATA_JSON_FILE}" into collection "${process.env.MONGODB_LISTINGS_COLLECTION}" of database "${process.env.MONGODB_DATABASE} of MongoDB Atlas "${process.env.MONGODB_CLUSTER}" with user "${process.env.MONGODB_USER}".`
    );
  }
};

seedCollection();
