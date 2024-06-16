import { app } from "@/lib/firebase/config";
import { Note } from "@/types/Note";
import { ref } from "firebase/database";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";

export async function getNotes() {
    const firestore = getFirestore(app);
    const notesRef = collection(firestore, "notes");
    const notesQuery = query(notesRef);
    const notes: Note[] = [];
    try {
        const querySnap = await getDocs(notesQuery);
        if (querySnap.empty) {
            return [];
        }
        querySnap.forEach(doc => {
            notes.push({
                id: doc.id,
                ...doc.data()
            } as Note);
        });
    } catch (err) {
        console.error(err);
    }
    return notes;
}