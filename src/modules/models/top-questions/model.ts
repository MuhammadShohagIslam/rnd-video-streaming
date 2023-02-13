import { getDB } from "../../db/mongo";

const collectionName = "top-questions";

const getCollection = () => {
    const db = getDB();
    const collection = db?.collection(collectionName);
    return collection;
};
const _ = {
    topQuestions: getCollection(),
    name: collectionName,
};

export default _;
