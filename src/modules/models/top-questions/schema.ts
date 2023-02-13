import _ from "./model";
import { Db } from "mongodb";
const { name } = _;

export const updateSchema = async (db: Db) => {
    const validator = {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "question", "description"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "must be a string and is required",
                },
                question: {
                    bsonType: "string",
                    description: "must be a string and is required",
                },
                description: {
                    bsonType: "string",
                    description: "must be a string and is required",
                    minimum: 30,
                },
            },
        },
    };
    const collections = await db.listCollections({ name }).toArray();
    if (collections.length === 0) {
        console.log(`creating collection ${name}`);
        await db.createCollection(name, { validator });
    } else {
        console.log(`updating collection ${name}`);
        await db.command({
            collMod: name,
            validator,
        });
    }

    // indexes: name, question, description
    await db.command({
        createIndexes: name,
        indexes: [
            {
                key: {
                    name: -1,
                },
                name: "custom_name_index",
            },
            {
                key: {
                    question: -1,
                },
                name: "custom_question_index",
            },
            {
                key: {
                    question: "text",
                },
                name: "question_text_index",
            },
            {
                key: {
                    description: -1,
                },
                name: "custom_description_index",
            },
        ],
    });
};


