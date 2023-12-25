const { MongoClient } = require('mongodb');
const url = 'mongodb://127.0.0.1/?directConnection=true';

let database = null;

async function connection() {
    try {
        const client = await MongoClient.connect(url)
        database = client.db('Question-1')
        console.log("connected to the database");
    } catch (error) {
        console.log("connection failed")
    }
}

function getDb() {
    if (!database) {
        console.log("database is connected sccessfully")
    }
    return database;
}

module.exports = {
    getDb,
    connection
}
