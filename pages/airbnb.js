
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://adminUser:@Kleezpass01@cluster0.zzdo1.mongodb.net/sample_airbnb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
console.log("Connected to DB");
  // perform actions on the collection object
  client.close();
});
