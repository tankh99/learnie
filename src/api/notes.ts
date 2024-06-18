import { app } from "@/lib/firebase/config";
import { Note } from "@/types/Note";
import { ref } from "firebase/database";
import { addDoc, collection, getDocs, getFirestore, query } from "firebase/firestore";

const NOTE_TABLE_NAME = "notes"

export async function getNotes() {
    const firestore = getFirestore(app);
    const notesRef = collection(firestore, NOTE_TABLE_NAME);
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

export async function addNote(note: Note) {
    const firestore = getFirestore(app);
    const notesRef = collection(firestore, NOTE_TABLE_NAME);
    try {
        const addedNote = addDoc(notesRef, note);
        console.info(`Added note`, addedNote)
    } catch (err) {
        console.error(err);
    }
}