
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://adminUser:%40Kleezpass01@cluster0.zzdo1.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  const db = client.db("sample_airbnb");
console.log("Connected to DB");
  // perform actions on the collection object
  //client.close();
    findDocuments(db, res, req)
    client.close();
});

const findDocuments = async function(db, res, req) {
  // Get the documents collection
  const collection = db.collection('listingsAndReviews');
const myDoc = await collection.findOne();
         // Print to the console
         res.json(myDoc);
  // Find some documents
  //collection.find({}).toArray(function(err, docs) {
    //assert.equal(err, null);
    //console.log("Found the following records");
    //console.log(docs)
    //callback(docs);
  //});
}
