const {MongoClient} = require('mongodb');

let client; 

function connect(locals) {

    const uri = process.env.DB_URL

    client = new MongoClient(uri,{useUnifiedTopology: true})

    return client.connect()
    .then((connection) => {
        locals.collectionBikes = connection.db('Mongo-Collections-Assignment').collection('dreamBikes')
        locals.collectionFlowers = connection.db('Mongo-Collections-Assignment').collection('flowers')
        locals.collectionSilverware = connection.db('Mongo-Collections-Assignment').collection('silverware')
    })
    .catch(err => {
        console.log(err)
        process.exit()
    }) 

}