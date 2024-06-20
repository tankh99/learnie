'use client'

import { useDeleteNote } from "@/hooks/useNotes";
import { Note } from "@/types/Note"
import { Trash2 } from "lucide-react";
import Link from "next/link";

type P = {
  note: Note;
}

export default function NoteListItem({note}: P) {

  const deleteNoteMutation = useDeleteNote(note.id!);

  return (
    <div className="w-full flex items-cneter justify-between">
      <Link className="cursor-pointer" href={`/notes/${note.id}`}>
          <div>{note.title}</div>
      </Link>

      <Trash2 className="cursor-pointer" onClick={() => deleteNoteMutation.mutate()} />
    </div>
  )
}
