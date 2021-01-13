const MongoClient = require('mongodb').MongoClient;

const db = {
    user: 'adminUser',
    password: '%40Kleezpass01',
    name: 'algrith',
    collection: 'contacts'
}

const uri = `mongodb+srv://${db.user}:${db.password}@cluster0.zzdo1.mongodb.net/${db.name}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useUnifiedTopology: true });


export default function contactHandler(req, res) {
    
    const client.connect()

        const collection = client.db(db.name).collection(db.collection);
        
        // perform actions on the collection object  
        // Insert a single document, wait for promise so we can read it back
        
        let contact = req.body
    
        // const insert = await collection.insertOne(contact);    
    
        // Return response
        res.status(200).json({
            status: 'success',
            message: 'Sent successfully',
            body: contact
        });
        
        // const myDoc = await collection.findOne();
    
        client.close();
    
    });
        
}