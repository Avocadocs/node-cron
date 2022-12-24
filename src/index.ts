import cron from 'node-cron';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URL;
if (typeof uri === "undefined") {
  throw new Error("URL not defined");
}

const client = new MongoClient(uri);

cron.schedule(`*/1 * * * *`, async () => {

MongoClient.connect(uri, function(err, db) {
  if (err) throw err;
  if (typeof db === "undefined") {
    throw new Error("URL not defined");
  }
  var dbo = db.db("test");
  if (typeof dbo === "undefined") {
    throw new Error("URL not defined");
  }
  var myobj = { name: "Egirl", replace: "Playermodel" };
  dbo.collection("addons").insertOne(myobj, function(err: unknown, res: unknown) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

});
