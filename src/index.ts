import cron from 'node-cron';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URL;

const client = new MongoClient(uri);


cron.schedule(`*/1 * * * *`, async () => {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Establish and verify connection
    await client.db("test").insert({test: 'nodejs'});
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
});
