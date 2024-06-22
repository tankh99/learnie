
import { noteFormSchema } from "@/components/form/note-form";
import { DocumentData, DocumentSnapshot } from "firebase/firestore";
import { z } from "zod";

export type Note = {
    id?: string;
    title: string;
    data: string;
    createdAt: Date;
    updatedAt: Date;
}


export function firestoreNoteToNote(data: DocumentSnapshot<DocumentData, DocumentData>): Note {
    return {
        id: data.id,
        ...data.data(),
        createdAt: data.data()?.createdAt.toDate(),
        updatedAt: data.data()?.createdAt.toDate(),
    } as Note
}

export function formToNote(data: z.infer<typeof noteFormSchema>, update: boolean = false): Note {
    return {
        title: data.title,
        data: data.data,
        createdAt: new Date(),
        updatedAt: new Date()
    }
}
// export class Note {
//     public id?: string;
//     public title: string;
//     public data: string;
//     public createdAt: Date;
//     public updatedAt: Date;

//     constructor(data: z.infer<typeof noteFormSchema>) {
//         if (data) {
//             this.title = data.title;
//             this.data = data.data;
//         } else {
//             this.title = '';
//             this.data = '';
//         }
//         this.createdAt = new Date();
//         this.updatedAt = new Date();
//     }
// }