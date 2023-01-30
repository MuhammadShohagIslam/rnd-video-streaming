import { getDB } from "../../db/mongo";

const collectionName = "quizs";

const getCollection = () => {
    const db = getDB();
    const collection = db?.collection(collectionName);
    return collection;
};
const _ = {
    Quizs: getCollection(),
    name: collectionName,
};

export default _;
