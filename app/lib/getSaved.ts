"use server"

import getCollection, {RESULTS_COLLECTION} from "@/app/db";

/*This function is used for a user who already saved a result and want to get their results from
a past quiz
 */
export default async function getSaved({nickname}: {nickname: string}): Promise<string|null> {
        /*Get the database collection*/
        const resultCollection = await getCollection(RESULTS_COLLECTION);

        /*Look for the entry that matches the given nickname*/
        const data = await resultCollection.findOne({nickname: nickname});

        /*Error checking*/
        if (!data){
            return null;
        }

        /*Returns the house result with the first letter capitalized for easier redirection*/
        return data.result[0].toUpperCase() + data.result.slice(1, data.result.length)



}