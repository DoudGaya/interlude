import firebase_app from "../config";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)
export default async function addData(collection: any, id: any, data: any) {
    let dbRecords = null;
    let dberror = null;

    try {
        dbRecords = await setDoc(doc(db, collection, id), data, {
            merge: true,
        });
    } catch (e) {
        dberror = e;
    }

    return { dbRecords, dberror };
}