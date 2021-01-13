const MongoClient = require('mongodb').MongoClient;

const db = {
    user: 'adminUser',
    password: '%40Kleezpass01',
    name: 'algrith',
    collection: 'contacts'
}

// Construct a document                                                                                                                                                              
let contact = {
    "name": { "first": "Alan", "last": "Turing" },
    "birth": new Date(1912, 5, 23), // June 23, 1912                                                                                                                                 
    "death": new Date(1954, 5, 7),  // June 7, 1954                                                                                                                                  
    "contribs": [ "Turing machine", "Turing test", "Turingery" ],
    "views": 1250000
}

const uri = `mongodb+srv://${db.user}:${db.password}@cluster0.zzdo1.mongodb.net/${db.name}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useUnifiedTopology: true });

client.connect(async (req, res, err) => {

    const collection = client.db(db.name).collection(db.collection);
    
    // perform actions on the collection object  

    // Insert a single document, wait for promise so we can read it back
    const insert_contact = await collection.insertOne(contact);
    
    const myDoc = await collection.findOne();
    // Print to the console
    res.statusCode(200).end(myDoc);

    client.close();

});