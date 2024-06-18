import { app } from "@/lib/firebase/config";
import { Note } from "@/types/Note";
import { ref } from "firebase/database";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, orderBy, query, where } from "firebase/firestore";

const NOTE_TABLE_NAME = "notes"

export async function getNotes() {
    const notes: Note[] = [];
    try {
        const firestore = getFirestore(app);
        const notesRef = collection(firestore, NOTE_TABLE_NAME);

        const notesQuery = query(notesRef, orderBy('createdAt', 'desc'));
        const querySnap = await getDocs(notesQuery);
        if (querySnap.empty) {
            return [];
        }
        querySnap.docs.map(doc => {
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

export async function getNote(id: string) {
    try {
        const firestore = getFirestore(app);
        const notesRef = collection(firestore, NOTE_TABLE_NAME);
        const notesDocRef = doc(notesRef, id)
        const note = await getDoc(notesDocRef)
        if (note.exists()) {
            return {
                id: note.id,
                ...note.data()
            } as Note;
        }
        return null;
    } catch (err) {
        console.error(err);
    }
}

export async function addNote(note: Note) {
    try {
        const firestore = getFirestore(app);
        const notesRef = collection(firestore, NOTE_TABLE_NAME);
        const addedNote = await addDoc(notesRef, note);
        console.info(`Added note`, addedNote)
    } catch (err) {
        console.error(err);
    }
}