const { MongoClient } = require("mongodb");
const { mongodb } = require("../constants");
require("dotenv").config();

const db = {};
const init = async () => {
  const dbName = process.env.DB_NAME;
  const client = new MongoClient(process.env.DB_URI);

  try {
    await client.connect();
    await client.db(dbName).command({ ping: 1 });
    console.log("connected to db...");
    const _db = await client.db(dbName);

    db.papers = _db.collection(mongodb.collections.papers);
    // await db.papers.createIndex({ a: 1 });
    db.paperTypes = _db.collection(mongodb.collections.paperTypes);
    db.engineers = _db.collection(mongodb.collections.engineers);
    db.planes = _db.collection(mongodb.collections.planes);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { init, db };
