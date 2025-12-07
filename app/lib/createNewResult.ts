"use server"

import getCollection, {RESULTS_COLLECTION} from "../db";

/*This function is used to add a new nickname to the database*/
export default async function createNewResult(nickname: string, result: string):Promise<boolean> {
    console.log("createNewResult");
    /*Making the entry to be added to the db*/
    const r = {
        nickname: nickname,
        result: result,
    }

    /*Call to get the db*/
    const resultsCollection = await getCollection(RESULTS_COLLECTION);

        /*Checking if the nickname already exists and if not will add it*/
        if (await resultsCollection.find({nickname: `${r.nickname}`}).hasNext()){
            return false;
        } else {
            const res = await resultsCollection.insertOne({...r});
            if (!res.acknowledged) {
                throw new Error("DB insert failed");
            }
        }
    return true;
}