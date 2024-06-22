'use client'

import { useDeleteNote } from "@/hooks/useNotes";
import { Note } from "@/types/Note"
import { Trash2 } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

type P = {
  note: Note;
}

export default function NoteListItem({note}: P) {

  const deleteNoteMutation = useDeleteNote(note.id!);

  const deleteNote = async () => {
    try {
      await deleteNoteMutation.mutateAsync();
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="w-full flex items-cneter justify-between">
      <Link className="cursor-pointer" href={`/notes/${note.id}`}>
          <div>{note.title}</div>
      </Link>

      <Button disabled={deleteNoteMutation.isPending} className="px-2 py-1" variant={"destructive"} onClick={deleteNote}>
        <Trash2 size={16} className="cursor-pointer"  />
      </Button>
    </div>
  )
}
