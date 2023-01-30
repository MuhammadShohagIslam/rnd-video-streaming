// import mongo client
import { MongoClient, MongoClientOptions, Db } from "mongodb";

let _db: Db | null = null;

const connect = async (uri:string) => {
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } as MongoClientOptions);
    console.log("Connecting mongoDB");
    await client.connect();
    _db = client.db("Skill-judge");
    console.log("mongoDB Connected");
    return _db;
};

// create a getDB
const getDB = () => {
    return _db;
};

export { getDB, connect };
